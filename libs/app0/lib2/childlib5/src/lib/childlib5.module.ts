import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib2childlib5component0Component } from './lib2childlib5component0/lib2childlib5component0.component';
import { Lib2childlib5component1Component } from './lib2childlib5component1/lib2childlib5component1.component';
import { Lib2childlib5component2Component } from './lib2childlib5component2/lib2childlib5component2.component';
import { Lib2childlib5component3Component } from './lib2childlib5component3/lib2childlib5component3.component';
import { Lib2childlib5component4Component } from './lib2childlib5component4/lib2childlib5component4.component';
import { Lib2childlib5component5Component } from './lib2childlib5component5/lib2childlib5component5.component';
import { Lib2childlib5component6Component } from './lib2childlib5component6/lib2childlib5component6.component';
import { Lib2childlib5component7Component } from './lib2childlib5component7/lib2childlib5component7.component';
import { Lib2childlib5component8Component } from './lib2childlib5component8/lib2childlib5component8.component';
import { Lib2childlib5component9Component } from './lib2childlib5component9/lib2childlib5component9.component';
import { Lib2childlib5parentComponent } from './lib2childlib5parent/lib2childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Lib2childlib5component0Component,
    Lib2childlib5component1Component,
    Lib2childlib5component2Component,
    Lib2childlib5component3Component,
    Lib2childlib5component4Component,
    Lib2childlib5component5Component,
    Lib2childlib5component6Component,
    Lib2childlib5component7Component,
    Lib2childlib5component8Component,
    Lib2childlib5component9Component,
    Lib2childlib5parentComponent,
  ],
  exports: [Lib2childlib5parentComponent],
})
export class Childlib5Module {}
