import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib8component7Component } from './lib4childlib8component7.component';

describe('Lib4childlib8component7Component', () => {
  let component: Lib4childlib8component7Component;
  let fixture: ComponentFixture<Lib4childlib8component7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4childlib8component7Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib8component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
