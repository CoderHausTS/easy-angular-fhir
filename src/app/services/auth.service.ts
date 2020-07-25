import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ConformanceParserService } from './conformance-parser.service';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authorizationURL;
  private authorizeCode;
  private token;
  private patient;

  constructor(
    private http: HttpClient,
    private conformanceService: ConformanceParserService
  ) {}

  // the API server stores teh code_challenge.
  // This should NOT be done here, you'll lose the verifier when you refresh
  // folks should look at https://github.com/aaronpk/pkce-vanilla-js
  // generateCodeVerifier() {
  //   // pkce code verifier
  //   const array = new Uint32Array(32);
  //   const code = btoa(crypto.getRandomValues(array).toString());
  //   return code.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  // }

  // generateCodeChallenge(codeVerifier: string) {
  //   // return crypto.createHash('sha256').update(buffer).digest();
  //   const encoder = new TextEncoder();
  //   const data = encoder.encode(codeVerifier);
  //   let hashedData;
  //   window.crypto.subtle
  //     .digest('SHA-256', data)
  //     .then((resultData) => (hashedData = resultData));
  //   return btoa(hashedData)
  //     .replace(/\+/g, '-')
  //     .replace(/\//g, '_')
  //     .replace(/=+$/, '');
  // }

  fetchAuthorizationCode() {
    const responseType = 'code';
    const clientId = AppConfigService.settings.fhir.clientId;
    const redirectUri = AppConfigService.settings.fhir.redirectUrl;

    this.authorizationURL = this.conformanceService.getAuthorizationURL();

    const params = new HttpParams({
      fromObject: {
        response_type: responseType,
        client_id: clientId,
        redirect_uri: redirectUri,
        scope: '',
        state: '',
        // code_challenge: this.codeChallenge,
        // code_challenge_method: 'S256',
      },
    });

    window.location.href = this.authorizationURL + '?' + params.toString();
  }

  setAuthorizationCode(code: string) {
    this.authorizeCode = code;
  }

   fetchAuthorizationToken() {
    let tokenURL = this.conformanceService.getTokenURL();
    let grantType = 'authorization_code';
    let redirectURI = AppConfigService.settings.fhir.redirectUrl;
    let clientID = AppConfigService.settings.fhir.clientId;

    console.log('auth code is ', this.authorizeCode);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };

    const body = new HttpParams({
      fromObject: {
        grant_type: grantType,
        code: this.authorizeCode,
        redirect_uri: redirectURI,
        client_id: clientID,
        // code_verifier: this.codeVerifier
      },
    });

    this.http.post(tokenURL, body.toString(), httpOptions).subscribe((data) => {
      this.parseTokenResponse(data);
      console.log('This is the auth token response body: ', data);
    });
  }

  parseTokenResponse(tokenData) {
    this.patient = tokenData.patient;
    this.token = tokenData.access_token;
  }

  getToken() {
    return this.token;
  }

  getPatient() {
    return this.patient;
  }
}

