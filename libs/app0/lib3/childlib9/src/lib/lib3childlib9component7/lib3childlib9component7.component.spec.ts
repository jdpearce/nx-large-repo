import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3childlib9component7Component } from './lib3childlib9component7.component';

describe('Lib3childlib9component7Component', () => {
  let component: Lib3childlib9component7Component;
  let fixture: ComponentFixture<Lib3childlib9component7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3childlib9component7Component],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib9component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
