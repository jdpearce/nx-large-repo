import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib9component5Component } from './lib4childlib9component5.component';

describe('Lib4childlib9component5Component', () => {
  let component: Lib4childlib9component5Component;
  let fixture: ComponentFixture<Lib4childlib9component5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4childlib9component5Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib9component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
