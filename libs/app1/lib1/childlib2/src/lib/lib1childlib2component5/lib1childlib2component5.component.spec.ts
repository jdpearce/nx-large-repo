import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib2component5Component } from './lib1childlib2component5.component';

describe('Lib1childlib2component5Component', () => {
  let component: Lib1childlib2component5Component;
  let fixture: ComponentFixture<Lib1childlib2component5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1childlib2component5Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib2component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
