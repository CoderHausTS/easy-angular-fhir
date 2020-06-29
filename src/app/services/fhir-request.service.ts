import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { AppConfig } from '../models/app-config';
import { HttpClient } from '@angular/common/http';

// makes the requests for data to fhir enpoints, minus token, auth
@Injectable({
  providedIn: 'root',
})
export class FhirRequestService {
  conformanceStatement;

  constructor(private config: AppConfig, private http: HttpClient) {}

  // hit the conformance statement
  // conformanceStatementURL = baseUrl + 'metadata'
  // https://open-ic.epic.com/Argonaut/api/FHIR/Argonaut/metadata
  getConformanceStatement() {
    this.conformanceStatement = this.http.get(
      this.config.fhir.baseURL + 'metadata'
    );
    console.log('conformance statement ', this.conformanceStatement);
  }
}

// Queries must contain an Authorization header that includes the access token presented as a bearer token.
// https://open-ic.epic.com/argonaut/api/FHIR/Argonaut/Patient/Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB
// Authorization: Bearer Ft2FxQoCRMYtyvtbBE29yEG54bgv3agHzlVhzWcAHdzQG/DQDMVuUcFcUTCUT2cHQ6MW5jjBac6saH+K5kEE7PrpbaOjKKdLBVWeT/cGGOwbPTPtJz0KPLPSsWkjcHMG

// https://github.com/smart-on-fhir/client-js
// https://open-ic.epic.com/Argonaut/api/FHIR/Argonaut/metadata
