import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib8component5Component } from './lib2childlib8component5.component';

describe('Lib2childlib8component5Component', () => {
  let component: Lib2childlib8component5Component;
  let fixture: ComponentFixture<Lib2childlib8component5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2childlib8component5Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib8component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
