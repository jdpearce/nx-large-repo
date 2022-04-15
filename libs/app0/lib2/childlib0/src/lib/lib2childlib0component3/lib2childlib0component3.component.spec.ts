import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2childlib0component3Component } from './lib2childlib0component3.component';

describe('Lib2childlib0component3Component', () => {
  let component: Lib2childlib0component3Component;
  let fixture: ComponentFixture<Lib2childlib0component3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2childlib0component3Component],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib0component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
