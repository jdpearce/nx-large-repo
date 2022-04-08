import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib2childlib3component0Component } from './lib2childlib3component0/lib2childlib3component0.component';
import { Lib2childlib3component1Component } from './lib2childlib3component1/lib2childlib3component1.component';
import { Lib2childlib3component2Component } from './lib2childlib3component2/lib2childlib3component2.component';
import { Lib2childlib3component3Component } from './lib2childlib3component3/lib2childlib3component3.component';
import { Lib2childlib3component4Component } from './lib2childlib3component4/lib2childlib3component4.component';
import { Lib2childlib3component5Component } from './lib2childlib3component5/lib2childlib3component5.component';
import { Lib2childlib3component6Component } from './lib2childlib3component6/lib2childlib3component6.component';
import { Lib2childlib3component7Component } from './lib2childlib3component7/lib2childlib3component7.component';
import { Lib2childlib3component8Component } from './lib2childlib3component8/lib2childlib3component8.component';
import { Lib2childlib3component9Component } from './lib2childlib3component9/lib2childlib3component9.component';
import { Lib2childlib3parentComponent } from './lib2childlib3parent/lib2childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Lib2childlib3component0Component,
    Lib2childlib3component1Component,
    Lib2childlib3component2Component,
    Lib2childlib3component3Component,
    Lib2childlib3component4Component,
    Lib2childlib3component5Component,
    Lib2childlib3component6Component,
    Lib2childlib3component7Component,
    Lib2childlib3component8Component,
    Lib2childlib3component9Component,
    Lib2childlib3parentComponent,
  ],
  exports: [Lib2childlib3parentComponent],
})
export class Childlib3Module {}
