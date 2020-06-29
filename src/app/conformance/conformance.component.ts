import { Component, OnInit } from '@angular/core';
import { FhirRequestService } from '../services/fhir-request.service';

@Component({
  selector: 'app-conformance',
  templateUrl: './conformance.component.html',
  styleUrls: ['./conformance.component.css']
})
export class ConformanceComponent implements OnInit {

  conformanceStatement;

  constructor(private fhirReq: FhirRequestService) { }

  ngOnInit() {
    this.conformanceStatement = this.fhirReq.getConformanceStatement();
  }

  showConformanceStatement() {
      this.fhirReq.getConformanceStatement().subscribe(
        (data) =>
          (this.conformanceStatement = { ...data })
      );
  }

}
