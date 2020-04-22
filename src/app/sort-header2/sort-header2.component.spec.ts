import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortHeader2Component } from './sort-header2.component';

describe('SortHeader2Component', () => {
  let component: SortHeader2Component;
  let fixture: ComponentFixture<SortHeader2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortHeader2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortHeader2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
