import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConformanceParserService } from '../services/conformance-parser.service';
import { AppConfigService } from '../services/app-config.service';
import { ActivatedRouteStub } from '../testing/activated-route.stub';
import { ActivatedRoute } from '@angular/router';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let conformanceSpy: jasmine.SpyObj<ConformanceParserService>;
  let activateRouteStub: ActivatedRouteStub;

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

  beforeEach(async(() => {
    activateRouteStub = new ActivatedRouteStub({code: 'mockcode'});

    conformanceSpy = jasmine.createSpyObj('ConformanceParserService', [
      'getAuthorizationURL',
      'getTokenURL',
    ]);

    conformanceSpy.getAuthorizationURL.and.returnValue(mockURL);
    conformanceSpy.getTokenURL.and.returnValue(mockURL);

    TestBed.configureTestingModule({
      declarations: [AuthComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ConformanceParserService,
          useValue: conformanceSpy,
        },
        { provide: ActivatedRoute, useValue: ActivatedRouteStub },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
