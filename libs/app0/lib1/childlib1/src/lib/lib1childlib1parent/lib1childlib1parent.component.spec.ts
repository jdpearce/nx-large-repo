import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1childlib1parentComponent } from './lib1childlib1parent.component';

describe('Lib1childlib1parentComponent', () => {
  let component: Lib1childlib1parentComponent;
  let fixture: ComponentFixture<Lib1childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1childlib1parentComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
