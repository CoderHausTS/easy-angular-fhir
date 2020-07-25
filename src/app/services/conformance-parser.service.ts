import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
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

  getSecurityServices() {
    const services = this.conformanceStatement.rest[0].security.service;
    const availableServices = [];

    services.forEach((element) => {
      availableServices.push(element.coding[0].code);
    });

    return availableServices;
  }

  getAuthorizationURL() {
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
