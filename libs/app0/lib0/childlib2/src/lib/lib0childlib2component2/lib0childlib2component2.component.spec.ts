import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib0childlib2component2Component } from './lib0childlib2component2.component';

describe('Lib0childlib2component2Component', () => {
  let component: Lib0childlib2component2Component;
  let fixture: ComponentFixture<Lib0childlib2component2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib0childlib2component2Component],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib2component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
