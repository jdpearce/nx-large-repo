import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib0component8Component } from './lib1childlib0component8.component';

describe('Lib1childlib0component8Component', () => {
  let component: Lib1childlib0component8Component;
  let fixture: ComponentFixture<Lib1childlib0component8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1childlib0component8Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib0component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
