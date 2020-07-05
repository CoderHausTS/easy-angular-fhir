import { TestBed } from '@angular/core/testing';

import { AppConfigService } from './app-config.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [HttpClientTestingModule]}));

  it('should be created', () => {
    const service: AppConfigService = TestBed.get(AppConfigService);
    expect(service).toBeTruthy();
  });
});
