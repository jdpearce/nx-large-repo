import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib8component2Component } from './lib1childlib8component2.component';

describe('Lib1childlib8component2Component', () => {
  let component: Lib1childlib8component2Component;
  let fixture: ComponentFixture<Lib1childlib8component2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1childlib8component2Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib8component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
