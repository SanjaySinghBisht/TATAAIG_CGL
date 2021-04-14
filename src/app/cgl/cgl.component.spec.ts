import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CglComponent } from './cgl.component';

describe('CglComponent', () => {
  let component: CglComponent;
  let fixture: ComponentFixture<CglComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CglComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CglComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
