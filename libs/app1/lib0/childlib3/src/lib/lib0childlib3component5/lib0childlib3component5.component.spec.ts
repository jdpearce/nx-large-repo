import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib3component5Component } from './lib0childlib3component5.component';

describe('Lib0childlib3component5Component', () => {
  let component: Lib0childlib3component5Component;
  let fixture: ComponentFixture<Lib0childlib3component5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib0childlib3component5Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib3component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
