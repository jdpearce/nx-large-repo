import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib1childlib5component0Component } from './lib1childlib5component0/lib1childlib5component0.component';
import { Lib1childlib5component1Component } from './lib1childlib5component1/lib1childlib5component1.component';
import { Lib1childlib5component2Component } from './lib1childlib5component2/lib1childlib5component2.component';
import { Lib1childlib5component3Component } from './lib1childlib5component3/lib1childlib5component3.component';
import { Lib1childlib5component4Component } from './lib1childlib5component4/lib1childlib5component4.component';
import { Lib1childlib5component5Component } from './lib1childlib5component5/lib1childlib5component5.component';
import { Lib1childlib5component6Component } from './lib1childlib5component6/lib1childlib5component6.component';
import { Lib1childlib5component7Component } from './lib1childlib5component7/lib1childlib5component7.component';
import { Lib1childlib5component8Component } from './lib1childlib5component8/lib1childlib5component8.component';
import { Lib1childlib5component9Component } from './lib1childlib5component9/lib1childlib5component9.component';
import { Lib1childlib5parentComponent } from './lib1childlib5parent/lib1childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Lib1childlib5component0Component,
    Lib1childlib5component1Component,
    Lib1childlib5component2Component,
    Lib1childlib5component3Component,
    Lib1childlib5component4Component,
    Lib1childlib5component5Component,
    Lib1childlib5component6Component,
    Lib1childlib5component7Component,
    Lib1childlib5component8Component,
    Lib1childlib5component9Component,
    Lib1childlib5parentComponent,
  ],
  exports: [Lib1childlib5parentComponent],
})
export class Childlib5Module {}
