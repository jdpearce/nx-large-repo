import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2childlib3component8Component } from './lib2childlib3component8.component';

describe('Lib2childlib3component8Component', () => {
  let component: Lib2childlib3component8Component;
  let fixture: ComponentFixture<Lib2childlib3component8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2childlib3component8Component],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib3component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
