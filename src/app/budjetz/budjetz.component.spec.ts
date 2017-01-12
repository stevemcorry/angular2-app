/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BudjetzComponent } from './budjetz.component';

describe('BudjetzComponent', () => {
  let component: BudjetzComponent;
  let fixture: ComponentFixture<BudjetzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudjetzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudjetzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
