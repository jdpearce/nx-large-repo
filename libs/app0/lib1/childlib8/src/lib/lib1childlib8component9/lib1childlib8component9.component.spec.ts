import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib8component9Component } from './lib1childlib8component9.component';

describe('Lib1childlib8component9Component', () => {
  let component: Lib1childlib8component9Component;
  let fixture: ComponentFixture<Lib1childlib8component9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1childlib8component9Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib8component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
