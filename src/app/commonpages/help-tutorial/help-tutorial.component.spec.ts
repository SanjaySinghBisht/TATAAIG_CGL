import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpTutorialComponent } from './help-tutorial.component';

describe('HelpTutorialComponent', () => {
  let component: HelpTutorialComponent;
  let fixture: ComponentFixture<HelpTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
