import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib3childlib3component0Component } from './lib3childlib3component0/lib3childlib3component0.component';
import { Lib3childlib3component1Component } from './lib3childlib3component1/lib3childlib3component1.component';
import { Lib3childlib3component2Component } from './lib3childlib3component2/lib3childlib3component2.component';
import { Lib3childlib3component3Component } from './lib3childlib3component3/lib3childlib3component3.component';
import { Lib3childlib3component4Component } from './lib3childlib3component4/lib3childlib3component4.component';
import { Lib3childlib3component5Component } from './lib3childlib3component5/lib3childlib3component5.component';
import { Lib3childlib3component6Component } from './lib3childlib3component6/lib3childlib3component6.component';
import { Lib3childlib3component7Component } from './lib3childlib3component7/lib3childlib3component7.component';
import { Lib3childlib3component8Component } from './lib3childlib3component8/lib3childlib3component8.component';
import { Lib3childlib3component9Component } from './lib3childlib3component9/lib3childlib3component9.component';
import { Lib3childlib3parentComponent } from './lib3childlib3parent/lib3childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Lib3childlib3component0Component,
    Lib3childlib3component1Component,
    Lib3childlib3component2Component,
    Lib3childlib3component3Component,
    Lib3childlib3component4Component,
    Lib3childlib3component5Component,
    Lib3childlib3component6Component,
    Lib3childlib3component7Component,
    Lib3childlib3component8Component,
    Lib3childlib3component9Component,
    Lib3childlib3parentComponent,
  ],
  exports: [Lib3childlib3parentComponent],
})
export class Childlib3Module {}
