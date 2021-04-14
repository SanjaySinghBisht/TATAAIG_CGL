import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonpagesComponent } from './commonpages.component';

describe('CommonpagesComponent', () => {
  let component: CommonpagesComponent;
  let fixture: ComponentFixture<CommonpagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonpagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
