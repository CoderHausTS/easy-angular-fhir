import { Component, OnInit } from '@angular/core';
import { FhirRequestService } from '../services/fhir-request.service';
import { ConformanceParserService } from '../services/conformance-parser.service';

@Component({
  selector: 'app-conformance',
  templateUrl: './conformance.component.html',
  styleUrls: ['./conformance.component.css'],
})
export class ConformanceComponent implements OnInit {
  conformanceStatement;
  dataURL;
  FHIRVersion;
  EHRSoftwareVersion;
  securityServices;
  authURL;
  tokenURL;
  resources;

  // constructor(private conformanceService: ConformanceParserService) {}
  constructor(private conformanceService: ConformanceParserService) {}

  ngOnInit() {}

  getConformanceURL() {
    this.dataURL = this.conformanceService.getUrl();
  }

  getFhirVersion() {
    this.FHIRVersion = this.conformanceService.getFhirVersion();
  }

  getFhirResources() {
    this.resources = this.conformanceService.getAvailableResources();
  }
}
