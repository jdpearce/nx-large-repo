import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4childlib6parentComponent } from './lib4childlib6parent.component';

describe('Lib4childlib6parentComponent', () => {
  let component: Lib4childlib6parentComponent;
  let fixture: ComponentFixture<Lib4childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4childlib6parentComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
