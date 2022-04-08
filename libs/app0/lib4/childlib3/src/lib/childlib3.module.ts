import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib4childlib3component0Component } from './lib4childlib3component0/lib4childlib3component0.component';
import { Lib4childlib3component1Component } from './lib4childlib3component1/lib4childlib3component1.component';
import { Lib4childlib3component2Component } from './lib4childlib3component2/lib4childlib3component2.component';
import { Lib4childlib3component3Component } from './lib4childlib3component3/lib4childlib3component3.component';
import { Lib4childlib3component4Component } from './lib4childlib3component4/lib4childlib3component4.component';
import { Lib4childlib3component5Component } from './lib4childlib3component5/lib4childlib3component5.component';
import { Lib4childlib3component6Component } from './lib4childlib3component6/lib4childlib3component6.component';
import { Lib4childlib3component7Component } from './lib4childlib3component7/lib4childlib3component7.component';
import { Lib4childlib3component8Component } from './lib4childlib3component8/lib4childlib3component8.component';
import { Lib4childlib3component9Component } from './lib4childlib3component9/lib4childlib3component9.component';
import { Lib4childlib3parentComponent } from './lib4childlib3parent/lib4childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Lib4childlib3component0Component,
    Lib4childlib3component1Component,
    Lib4childlib3component2Component,
    Lib4childlib3component3Component,
    Lib4childlib3component4Component,
    Lib4childlib3component5Component,
    Lib4childlib3component6Component,
    Lib4childlib3component7Component,
    Lib4childlib3component8Component,
    Lib4childlib3component9Component,
    Lib4childlib3parentComponent,
  ],
  exports: [Lib4childlib3parentComponent],
})
export class Childlib3Module {}
