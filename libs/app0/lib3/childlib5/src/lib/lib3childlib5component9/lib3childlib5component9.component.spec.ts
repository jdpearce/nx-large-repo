import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib5component9Component } from './lib3childlib5component9.component';

describe('Lib3childlib5component9Component', () => {
  let component: Lib3childlib5component9Component;
  let fixture: ComponentFixture<Lib3childlib5component9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3childlib5component9Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib5component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
