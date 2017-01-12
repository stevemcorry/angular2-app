/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CrowdControlComponent } from './crowd-control.component';

describe('CrowdControlComponent', () => {
  let component: CrowdControlComponent;
  let fixture: ComponentFixture<CrowdControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrowdControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrowdControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
