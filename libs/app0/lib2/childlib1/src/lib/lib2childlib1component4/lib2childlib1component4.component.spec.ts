import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib1component4Component } from './lib2childlib1component4.component';

describe('Lib2childlib1component4Component', () => {
  let component: Lib2childlib1component4Component;
  let fixture: ComponentFixture<Lib2childlib1component4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2childlib1component4Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib1component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
