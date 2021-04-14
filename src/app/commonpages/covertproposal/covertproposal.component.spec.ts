import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovertproposalComponent } from './covertproposal.component';

describe('CovertproposalComponent', () => {
  let component: CovertproposalComponent;
  let fixture: ComponentFixture<CovertproposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovertproposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovertproposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
