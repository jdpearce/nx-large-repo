import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4childlib0component8Component } from './lib4childlib0component8.component';

describe('Lib4childlib0component8Component', () => {
  let component: Lib4childlib0component8Component;
  let fixture: ComponentFixture<Lib4childlib0component8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4childlib0component8Component],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib0component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
