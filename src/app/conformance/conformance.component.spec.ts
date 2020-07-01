import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConformanceComponent } from './conformance.component';
import { HttpClient } from '@angular/common/http';

describe('ConformanceComponent', () => {
  let component: ConformanceComponent;
  let fixture: ComponentFixture<ConformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConformanceComponent ],
      providers: [HttpClient]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
