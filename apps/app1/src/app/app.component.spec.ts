import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Lib0Module } from '@largerepo/app0/lib0/lib0';
import { Lib1Module } from '@largerepo/app0/lib1/lib1';
import { Lib2Module } from '@largerepo/app0/lib2/lib2';
import { Lib3Module } from '@largerepo/app0/lib3/lib3';
import { Lib4Module } from '@largerepo/app0/lib4/lib4';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib0Module, Lib1Module, Lib2Module, Lib3Module, Lib4Module],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
