import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib1component2Component } from './lib4childlib1component2.component';

describe('Lib4childlib1component2Component', () => {
  let component: Lib4childlib1component2Component;
  let fixture: ComponentFixture<Lib4childlib1component2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4childlib1component2Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib1component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
