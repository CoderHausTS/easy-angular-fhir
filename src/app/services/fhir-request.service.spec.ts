import { TestBed } from '@angular/core/testing';

import { FhirRequestService } from './fhir-request.service';

describe('FhirRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FhirRequestService = TestBed.get(FhirRequestService);
    expect(service).toBeTruthy();
  });
});
