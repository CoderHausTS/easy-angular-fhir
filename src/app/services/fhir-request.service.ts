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

