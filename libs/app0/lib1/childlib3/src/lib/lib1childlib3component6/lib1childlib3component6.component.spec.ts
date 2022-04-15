import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1childlib3component6Component } from './lib1childlib3component6.component';

describe('Lib1childlib3component6Component', () => {
  let component: Lib1childlib3component6Component;
  let fixture: ComponentFixture<Lib1childlib3component6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1childlib3component6Component],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib3component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
