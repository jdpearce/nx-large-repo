import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3childlib1parentComponent } from './lib3childlib1parent.component';

describe('Lib3childlib1parentComponent', () => {
  let component: Lib3childlib1parentComponent;
  let fixture: ComponentFixture<Lib3childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3childlib1parentComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
