import { Injectable } from '@angular/core';
import { FhirRequestService } from './fhir-request.service';

@Injectable({
  providedIn: 'root',
})
export class ConformanceParserService {
  conformanceStatement;

  constructor(private fhirSvc: FhirRequestService) {
    this.getConformanceStatement();
  }

  getConformanceStatement() {
    this.fhirSvc
      .getConformanceStatement()
      .subscribe((data) => (this.conformanceStatement = { data }));
  }

  // resourceType: 'Conformance';
  // url: 'https://open-ic.epic.com/Argonaut/api/FHIR/DSTU2/Conformance/TZzRezXMT8l7jtxLL6OLcugB';
  // version: 'TZzRezXMT8l7jtxLL6OLcugB';
  // copyright: 'Copyright Epic 1979-2015';
  // status: 'active';
  // experimental: true;
  // date: '2020-06-30T11:28:32Z';
  // fhirVersion: '1.0.2';
  // acceptUnknown: 'no';
  getUrl() {
    return this.conformanceStatement.data.data.url;
  }

  getFhirVersion() {
    return this.conformanceStatement.data.data.fhirVersion;
  }

  getSoftwareInformation() {
    const name = this.conformanceStatement.data.data.software.name;
    const version = this.conformanceStatement.data.data.software.version;
    const releaseDate = this.conformanceStatement.data.data.software.releaseDate;

    return { name, version, releaseDate };
  }

  // rest[0].security.service is an array of values
  // loop through array and get coding
  getSecurityServices() {
    const services = this.conformanceStatement.data.data.rest[0].security.service;
    const availableServices = [];

    services.forEach((element) => {
      availableServices.push(element.coding[0].code);
    });

    return availableServices;
  }

  getAuthorizationURL() {
    const extensions = this.conformanceStatement.data.data.rest[0].security.extension[0]
      .extension;
    let authURL;

    extensions.forEach((element) => {
      if (element.url === 'authorize') {
        authURL = element.valueUri;
      }
    });

    return authURL;
  }

  getTokenURL() {
    const extensions = this.conformanceStatement.data.data.rest[0].security.extension[0]
      .extension;
    let tokenURL;

    extensions.forEach((element) => {
      if (element.url === 'token') {
        tokenURL = element.valueUri;
      }
    });

    return tokenURL;
  }

  getAvailableResources() {
    const resources = this.conformanceStatement.data.data.rest[0].resource;
    const availableResources = [];

    resources.forEach(element => {
      availableResources.push(element.type);
    });

    return availableResources;
  }

  getResourceInfo(resource: string) {
    // need to filter resources and return that node?
  }
}
