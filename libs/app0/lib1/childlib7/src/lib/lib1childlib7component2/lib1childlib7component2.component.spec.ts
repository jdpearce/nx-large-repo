import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1childlib7component2Component } from './lib1childlib7component2.component';

describe('Lib1childlib7component2Component', () => {
  let component: Lib1childlib7component2Component;
  let fixture: ComponentFixture<Lib1childlib7component2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1childlib7component2Component],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib7component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
