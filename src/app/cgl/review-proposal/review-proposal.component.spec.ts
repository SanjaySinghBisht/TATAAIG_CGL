import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewProposalComponent } from './review-proposal.component';

describe('ReviewProposalComponent', () => {
  let component: ReviewProposalComponent;
  let fixture: ComponentFixture<ReviewProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
