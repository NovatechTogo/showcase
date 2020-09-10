import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServicesTopComponent } from './our-services-top.component';

describe('OurServicesTopComponent', () => {
  let component: OurServicesTopComponent;
  let fixture: ComponentFixture<OurServicesTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurServicesTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurServicesTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
