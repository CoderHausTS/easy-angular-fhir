import { Injectable } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root',
})
export class ConformanceParserService {
  conformanceStatement;
  private conformanceStatementChanged = new Subject<any>();

  constructor(private http: HttpClient) {
    this.conformanceStatmentFetch();
  }

  // hit the conformance statement
  // conformanceStatementURL = baseUrl + 'metadata'
  // https://open-ic.epic.com/Argonaut/api/FHIR/Argonaut/metadata
  // getConformanceStatement() {
  //   return this.conformanceStatement.asObservable();
  // }

  conformanceStatmentFetch() {
    this.http
      .get(AppConfigService.settings.fhir.baseURL + 'metadata')
      .subscribe((data) => {
        this.setConformanceStatement(data);
      });
  }

  setConformanceStatement(confStatement) {
    this.conformanceStatement = confStatement;
    this.conformanceStatementChanged.next(this.conformanceStatement);
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
    return this.conformanceStatement.url;
  }

  getFhirVersion() {
    return this.conformanceStatement.fhirVersion;
  }

  getSoftwareInformation() {
    const name = this.conformanceStatement.software.name;
    const version = this.conformanceStatement.software.version;
    const releaseDate = this.conformanceStatement.software.releaseDate;

    return { name, version, releaseDate };
  }

  // // rest[0].security.service is an array of values
  // // loop through array and get coding
  getSecurityServices() {
    const services = this.conformanceStatement.rest[0].security.service;
    const availableServices = [];

    services.forEach((element) => {
      availableServices.push(element.coding[0].code);
    });

    return availableServices;
  }

  getAuthorizationURL() {
    // console.log('rest is ', this.conformanceStatement.rest[0]);
    const extensions = this.conformanceStatement.rest[0].security.extension[0]
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
    const extensions = this.conformanceStatement.rest[0].security.extension[0]
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
    const resources = this.conformanceStatement.rest[0].resource;
    const availableResources = [];

    resources.forEach((element) => {
      availableResources.push(element.type);
    });

    return availableResources;
  }

  getResourceInfo(resource: string) {
    // need to filter resources and return that node?
  }
}
