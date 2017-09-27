/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ServerVueComponent } from './server-vue.component';

describe('ServerVueComponent', () => {
  let component: ServerVueComponent;
  let fixture: ComponentFixture<ServerVueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerVueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerVueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
