import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib2component7Component } from './lib1childlib2component7.component';

describe('Lib1childlib2component7Component', () => {
  let component: Lib1childlib2component7Component;
  let fixture: ComponentFixture<Lib1childlib2component7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1childlib2component7Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib2component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
