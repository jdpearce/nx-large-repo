import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib1component9Component } from './lib0childlib1component9.component';

describe('Lib0childlib1component9Component', () => {
  let component: Lib0childlib1component9Component;
  let fixture: ComponentFixture<Lib0childlib1component9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib0childlib1component9Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib1component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
