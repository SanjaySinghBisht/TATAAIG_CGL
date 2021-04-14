import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewquoteComponent } from './previewquote.component';

describe('PreviewquoteComponent', () => {
  let component: PreviewquoteComponent;
  let fixture: ComponentFixture<PreviewquoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewquoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
