import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib6component5Component } from './lib2childlib6component5.component';

describe('Lib2childlib6component5Component', () => {
  let component: Lib2childlib6component5Component;
  let fixture: ComponentFixture<Lib2childlib6component5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2childlib6component5Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib6component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
