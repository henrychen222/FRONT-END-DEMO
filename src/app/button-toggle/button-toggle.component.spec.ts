import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToggleComponent } from './button-toggle.component';

describe('ToggleButtonComponent', () => {
  let component: ButtonToggleComponent;
  let fixture: ComponentFixture<ButtonToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
