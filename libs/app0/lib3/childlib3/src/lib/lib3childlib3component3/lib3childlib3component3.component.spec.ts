import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib3component3Component } from './lib3childlib3component3.component';

describe('Lib3childlib3component3Component', () => {
  let component: Lib3childlib3component3Component;
  let fixture: ComponentFixture<Lib3childlib3component3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3childlib3component3Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib3component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
