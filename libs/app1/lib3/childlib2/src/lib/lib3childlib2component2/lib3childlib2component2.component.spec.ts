import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib2component2Component } from './lib3childlib2component2.component';

describe('Lib3childlib2component2Component', () => {
  let component: Lib3childlib2component2Component;
  let fixture: ComponentFixture<Lib3childlib2component2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3childlib2component2Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib2component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
