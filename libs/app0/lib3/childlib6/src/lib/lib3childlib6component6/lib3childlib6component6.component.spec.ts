import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib6component6Component } from './lib3childlib6component6.component';

describe('Lib3childlib6component6Component', () => {
  let component: Lib3childlib6component6Component;
  let fixture: ComponentFixture<Lib3childlib6component6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3childlib6component6Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib6component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
