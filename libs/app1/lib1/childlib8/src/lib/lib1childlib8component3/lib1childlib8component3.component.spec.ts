import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib8component3Component } from './lib1childlib8component3.component';

describe('Lib1childlib8component3Component', () => {
  let component: Lib1childlib8component3Component;
  let fixture: ComponentFixture<Lib1childlib8component3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1childlib8component3Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib8component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
