import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib4component8Component } from './lib0childlib4component8.component';

describe('Lib0childlib4component8Component', () => {
  let component: Lib0childlib4component8Component;
  let fixture: ComponentFixture<Lib0childlib4component8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib0childlib4component8Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib4component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
