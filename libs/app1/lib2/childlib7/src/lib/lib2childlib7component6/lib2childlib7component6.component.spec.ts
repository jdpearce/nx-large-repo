import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2childlib7component6Component } from './lib2childlib7component6.component';

describe('Lib2childlib7component6Component', () => {
  let component: Lib2childlib7component6Component;
  let fixture: ComponentFixture<Lib2childlib7component6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2childlib7component6Component],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib7component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
