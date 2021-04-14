import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationSheetComponent } from './information-sheet.component';

describe('InformationSheetComponent', () => {
  let component: InformationSheetComponent;
  let fixture: ComponentFixture<InformationSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
