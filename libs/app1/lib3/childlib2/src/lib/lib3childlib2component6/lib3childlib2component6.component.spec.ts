import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3childlib2component6Component } from './lib3childlib2component6.component';

describe('Lib3childlib2component6Component', () => {
  let component: Lib3childlib2component6Component;
  let fixture: ComponentFixture<Lib3childlib2component6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3childlib2component6Component],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib2component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
