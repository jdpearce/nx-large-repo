import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3childlib7component3Component } from './lib3childlib7component3.component';

describe('Lib3childlib7component3Component', () => {
  let component: Lib3childlib7component3Component;
  let fixture: ComponentFixture<Lib3childlib7component3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3childlib7component3Component],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib7component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
