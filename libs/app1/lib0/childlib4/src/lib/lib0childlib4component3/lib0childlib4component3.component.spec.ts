import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib4component3Component } from './lib0childlib4component3.component';

describe('Lib0childlib4component3Component', () => {
  let component: Lib0childlib4component3Component;
  let fixture: ComponentFixture<Lib0childlib4component3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib0childlib4component3Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib4component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
