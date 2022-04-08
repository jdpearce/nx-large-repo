import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib1childlib0component0Component } from './lib1childlib0component0/lib1childlib0component0.component';
import { Lib1childlib0component1Component } from './lib1childlib0component1/lib1childlib0component1.component';
import { Lib1childlib0component2Component } from './lib1childlib0component2/lib1childlib0component2.component';
import { Lib1childlib0component3Component } from './lib1childlib0component3/lib1childlib0component3.component';
import { Lib1childlib0component4Component } from './lib1childlib0component4/lib1childlib0component4.component';
import { Lib1childlib0component5Component } from './lib1childlib0component5/lib1childlib0component5.component';
import { Lib1childlib0component6Component } from './lib1childlib0component6/lib1childlib0component6.component';
import { Lib1childlib0component7Component } from './lib1childlib0component7/lib1childlib0component7.component';
import { Lib1childlib0component8Component } from './lib1childlib0component8/lib1childlib0component8.component';
import { Lib1childlib0component9Component } from './lib1childlib0component9/lib1childlib0component9.component';
import { Lib1childlib0parentComponent } from './lib1childlib0parent/lib1childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Lib1childlib0component0Component,
    Lib1childlib0component1Component,
    Lib1childlib0component2Component,
    Lib1childlib0component3Component,
    Lib1childlib0component4Component,
    Lib1childlib0component5Component,
    Lib1childlib0component6Component,
    Lib1childlib0component7Component,
    Lib1childlib0component8Component,
    Lib1childlib0component9Component,
    Lib1childlib0parentComponent,
  ],
  exports: [Lib1childlib0parentComponent],
})
export class Childlib0Module {}
