import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfigService, initializeApp } from './services/app-config.service';
import { HttpClientModule } from '@angular/common/http';
import { ConformanceComponent } from './conformance/conformance.component';
import { AuthComponent } from './auth/auth.component';
import { PatientComponent } from './patient/patient.component';

@NgModule({
  declarations: [AppComponent, ConformanceComponent, AuthComponent, PatientComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfigService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
