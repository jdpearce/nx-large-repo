import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib1component9Component } from './lib4childlib1component9.component';

describe('Lib4childlib1component9Component', () => {
  let component: Lib4childlib1component9Component;
  let fixture: ComponentFixture<Lib4childlib1component9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4childlib1component9Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib1component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
