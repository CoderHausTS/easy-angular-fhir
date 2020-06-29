import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../models/app-config';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  static settings: AppConfig;

  constructor(private http: HttpClient) {}

  load() {
    const jsonFile = `assets/config/config.${environment.name}.json`;

    return new Promise<void>((resolve, reject) => {
      this.http
        .get(jsonFile)
        .toPromise()
        .then((response: AppConfig) => {
          AppConfigService.settings = response as AppConfig;
          resolve();
        })
        .catch((response: any) => {
          reject(
            `Could not load file '${jsonFile}': ${JSON.stringify(response)}`
          );
        });
    });
  }
}

export function initializeApp(appConfig: AppConfigService) {
  return () => appConfig.load();
}
