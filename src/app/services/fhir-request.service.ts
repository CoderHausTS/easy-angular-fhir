import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from './app-config.service';
import { ConformanceParserService } from './conformance-parser.service';

// makes the requests for data to fhir enpoints, minus token, auth
@Injectable({
  providedIn: 'root',
})
export class FhirRequestService {
  constructor(
    private config: AppConfigService,
    private http: HttpClient,
    private confStatementService: ConformanceParserService
  ) {}
}

// Queries must contain an Authorization header that includes the access token presented as a bearer token.
// https://open-ic.epic.com/argonaut/api/FHIR/Argonaut/Patient/Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB
// Authorization: Bearer Ft2FxQoCRMYtyvtbBE29yEG54bgv3agHzlVhzWcAHdzQG/DQDMVuUcFcUTCUT2cHQ6MW5jjBac6saH+K5kEE7PrpbaOjKKdLBVWeT/cGGOwbPTPtJz0KPLPSsWkjcHMG

// https://github.com/smart-on-fhir/client-js
// https://open-ic.epic.com/Argonaut/api/FHIR/Argonaut/metadata
