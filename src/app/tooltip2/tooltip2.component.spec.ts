import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tooltip2Component } from './tooltip2.component';

describe('Tooltip2Component', () => {
  let component: Tooltip2Component;
  let fixture: ComponentFixture<Tooltip2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tooltip2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tooltip2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
