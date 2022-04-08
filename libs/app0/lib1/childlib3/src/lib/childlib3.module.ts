import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib1childlib3component0Component } from './lib1childlib3component0/lib1childlib3component0.component';
import { Lib1childlib3component1Component } from './lib1childlib3component1/lib1childlib3component1.component';
import { Lib1childlib3component2Component } from './lib1childlib3component2/lib1childlib3component2.component';
import { Lib1childlib3component3Component } from './lib1childlib3component3/lib1childlib3component3.component';
import { Lib1childlib3component4Component } from './lib1childlib3component4/lib1childlib3component4.component';
import { Lib1childlib3component5Component } from './lib1childlib3component5/lib1childlib3component5.component';
import { Lib1childlib3component6Component } from './lib1childlib3component6/lib1childlib3component6.component';
import { Lib1childlib3component7Component } from './lib1childlib3component7/lib1childlib3component7.component';
import { Lib1childlib3component8Component } from './lib1childlib3component8/lib1childlib3component8.component';
import { Lib1childlib3component9Component } from './lib1childlib3component9/lib1childlib3component9.component';
import { Lib1childlib3parentComponent } from './lib1childlib3parent/lib1childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Lib1childlib3component0Component,
    Lib1childlib3component1Component,
    Lib1childlib3component2Component,
    Lib1childlib3component3Component,
    Lib1childlib3component4Component,
    Lib1childlib3component5Component,
    Lib1childlib3component6Component,
    Lib1childlib3component7Component,
    Lib1childlib3component8Component,
    Lib1childlib3component9Component,
    Lib1childlib3parentComponent,
  ],
  exports: [Lib1childlib3parentComponent],
})
export class Childlib3Module {}
