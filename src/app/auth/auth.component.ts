import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ConformanceParserService } from '../services/conformance-parser.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  codeParam = '';
  authToken = '';
  patient = '';

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((params: Params) => {
      this.codeParam = params.params.code;
    });

    if (this.codeParam) {
      this.authService.setAuthorizationCode(this.codeParam);
      // window.history.replaceState({}, document.title, '/');
      setTimeout(() => {
      this.authService.fetchAuthorizationToken();

      }, 4000);
    }
  }

  getAuthCode() {
    this.authService.fetchAuthorizationCode();
  }

  getToken() {
    this.authToken = this.authService.getToken();
  }

  getPatient() {
    this.patient = this.authService.getPatient();
  }
}
