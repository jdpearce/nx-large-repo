import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib2component4Component } from './lib4childlib2component4.component';

describe('Lib4childlib2component4Component', () => {
  let component: Lib4childlib2component4Component;
  let fixture: ComponentFixture<Lib4childlib2component4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4childlib2component4Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib2component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
