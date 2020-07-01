import { TestBed } from '@angular/core/testing';

import { FhirRequestService } from './fhir-request.service';
import { HttpClient } from '@angular/common/http';

describe('FhirRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClient ]
  }));

  it('should be created', () => {
    const service: FhirRequestService = TestBed.get(FhirRequestService);
    expect(service).toBeTruthy();
  });
});
