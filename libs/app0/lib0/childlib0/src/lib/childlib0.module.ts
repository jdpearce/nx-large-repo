import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Lib0childlib0component0Component } from './lib0childlib0component0/lib0childlib0component0.component';
import { Lib0childlib0component1Component } from './lib0childlib0component1/lib0childlib0component1.component';
import { Lib0childlib0component2Component } from './lib0childlib0component2/lib0childlib0component2.component';
import { Lib0childlib0component3Component } from './lib0childlib0component3/lib0childlib0component3.component';
import { Lib0childlib0component4Component } from './lib0childlib0component4/lib0childlib0component4.component';
import { Lib0childlib0component5Component } from './lib0childlib0component5/lib0childlib0component5.component';
import { Lib0childlib0component6Component } from './lib0childlib0component6/lib0childlib0component6.component';
import { Lib0childlib0component7Component } from './lib0childlib0component7/lib0childlib0component7.component';
import { Lib0childlib0component8Component } from './lib0childlib0component8/lib0childlib0component8.component';
import { Lib0childlib0component9Component } from './lib0childlib0component9/lib0childlib0component9.component';
import { Lib0childlib0parentComponent } from './lib0childlib0parent/lib0childlib0parent.component';

// a small insignificant change (yet again)

@NgModule({
  imports: [CommonModule],
  declarations: [
    Lib0childlib0component0Component,
    Lib0childlib0component1Component,
    Lib0childlib0component2Component,
    Lib0childlib0component3Component,
    Lib0childlib0component4Component,
    Lib0childlib0component5Component,
    Lib0childlib0component6Component,
    Lib0childlib0component7Component,
    Lib0childlib0component8Component,
    Lib0childlib0component9Component,
    Lib0childlib0parentComponent,
  ],
  exports: [Lib0childlib0parentComponent],
})
export class Childlib0Module {}
