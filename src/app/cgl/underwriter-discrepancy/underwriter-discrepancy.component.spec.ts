import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderwriterDiscrepancyComponent } from './underwriter-discrepancy.component';

describe('UnderwriterDiscrepancyComponent', () => {
  let component: UnderwriterDiscrepancyComponent;
  let fixture: ComponentFixture<UnderwriterDiscrepancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderwriterDiscrepancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderwriterDiscrepancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
