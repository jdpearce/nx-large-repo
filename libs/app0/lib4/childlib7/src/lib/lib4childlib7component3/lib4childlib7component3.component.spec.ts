import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4childlib7component3Component } from './lib4childlib7component3.component';

describe('Lib4childlib7component3Component', () => {
  let component: Lib4childlib7component3Component;
  let fixture: ComponentFixture<Lib4childlib7component3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4childlib7component3Component],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib7component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
