import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib0component3Component } from './lib4childlib0component3.component';

describe('Lib4childlib0component3Component', () => {
  let component: Lib4childlib0component3Component;
  let fixture: ComponentFixture<Lib4childlib0component3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4childlib0component3Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib0component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
