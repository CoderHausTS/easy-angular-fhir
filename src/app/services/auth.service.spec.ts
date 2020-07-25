import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';
import { ConformanceParserService } from './conformance-parser.service';
import { of } from 'rxjs';
import { AppConfigService } from './app-config.service';
import { browser } from 'protractor';

describe('AuthService', () => {
  let conformanceSpy: jasmine.SpyObj<ConformanceParserService>;

  let service: AuthService;
  let backend: HttpTestingController;

  const clientID = 'fake-client-id';
  const redirectURI = 'http://mock.redirect.uri:8000';
  const responseType = 'code';

  const MockAppConstants = AppConfigService;
  MockAppConstants.settings = {
    env: {
      name: 'mock',
      title: 'Mocky Angular FHIR',
    },
    fhir: {
      baseURL: 'https://mockity/',
      clientId: clientID,
      redirectUrl: redirectURI,
    },
  };
  const mockURL = MockAppConstants.settings.fhir.baseURL + 'zippity/doo/dah';

  const expectedAuthorizationURI =
    mockURL +
    `?response_type=${responseType}&client_id=${clientID}&redirect_uri=${redirectURI}`;

  beforeEach(() => {
    conformanceSpy = jasmine.createSpyObj('ConformanceParserService', [
      'getAuthorizationURL',
      'getTokenURL',
    ]);

    conformanceSpy.getAuthorizationURL.and.returnValue(mockURL);
    conformanceSpy.getTokenURL.and.returnValue(mockURL);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ConformanceParserService,
          useValue: conformanceSpy,
        },
        {
          provide: AppConfigService,
          useClass: MockAppConstants,
        },
      ],
    });
  });

  beforeEach(() => {
    service = TestBed.get(AuthService);
    backend = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should use the correct parameters when hitting the authorization endpoint', () => {});

  it('should get an authorization code from our endpoint', () => {});

  // exchange the code for a token
  // HTTP POST to the token service
  // with these params grant_type,code, redirect_uri, client_id

  // we then get back the token
  // it contains a json object with the following
  // access_token, token_type, expires_in, scope, patient
  it('should exchange the authorization code for the token code', () => {});

  // and now we can get our data!
  it('should return our token code from memory when we ask for the code and already have one', () => {});
});
