import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib2component9Component } from './lib0childlib2component9.component';

describe('Lib0childlib2component9Component', () => {
  let component: Lib0childlib2component9Component;
  let fixture: ComponentFixture<Lib0childlib2component9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib0childlib2component9Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib2component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
