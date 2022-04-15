import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2childlib3parentComponent } from './lib2childlib3parent.component';

describe('Lib2childlib3parentComponent', () => {
  let component: Lib2childlib3parentComponent;
  let fixture: ComponentFixture<Lib2childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2childlib3parentComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
