import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { AppConfigService } from '../services/app-config.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit {
  patient;
  token;
  patientData;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.patient = params['oid'];
      this.token = params['token'];
    });
    window.history.replaceState({}, document.title, '/patient');
  }

  getPatientData() {
    this.http
      .get(
        AppConfigService.settings.fhir.baseURL +
          `MedicationStatement?patient=${this.patient}`
      )
      .subscribe((data) => {
        {
          this.patientData = data;
          console.log(data);
        }
      });
  }
}
