import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomineedetailsComponent } from './nomineedetails.component';

describe('NomineedetailsComponent', () => {
  let component: NomineedetailsComponent;
  let fixture: ComponentFixture<NomineedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomineedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomineedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
