import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib0component8Component } from './lib2childlib0component8.component';

describe('Lib2childlib0component8Component', () => {
  let component: Lib2childlib0component8Component;
  let fixture: ComponentFixture<Lib2childlib0component8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2childlib0component8Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib0component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
