import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib0component2Component } from './lib2childlib0component2.component';

describe('Lib2childlib0component2Component', () => {
  let component: Lib2childlib0component2Component;
  let fixture: ComponentFixture<Lib2childlib0component2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2childlib0component2Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib0component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
