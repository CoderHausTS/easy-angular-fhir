import { TestBed } from '@angular/core/testing';

import { ConformanceParserService } from './conformance-parser.service';

describe('ConformanceParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConformanceParserService = TestBed.get(ConformanceParserService);
    expect(service).toBeTruthy();
  });
});
