import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib6parentComponent } from './lib0childlib6parent.component';

describe('Lib0childlib6parentComponent', () => {
  let component: Lib0childlib6parentComponent;
  let fixture: ComponentFixture<Lib0childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib0childlib6parentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
