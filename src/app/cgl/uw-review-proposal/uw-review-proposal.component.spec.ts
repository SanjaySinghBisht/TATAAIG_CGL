import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UwReviewProposalComponent } from './uw-review-proposal.component';

describe('UwReviewProposalComponent', () => {
  let component: UwReviewProposalComponent;
  let fixture: ComponentFixture<UwReviewProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UwReviewProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UwReviewProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
