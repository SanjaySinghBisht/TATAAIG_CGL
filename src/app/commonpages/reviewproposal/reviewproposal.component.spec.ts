import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewproposalComponent } from './reviewproposal.component';

describe('ReviewproposalComponent', () => {
  let component: ReviewproposalComponent;
  let fixture: ComponentFixture<ReviewproposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewproposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewproposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
