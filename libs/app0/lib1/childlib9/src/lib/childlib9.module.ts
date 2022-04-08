import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib1childlib9component0Component } from './lib1childlib9component0/lib1childlib9component0.component';
import { Lib1childlib9component1Component } from './lib1childlib9component1/lib1childlib9component1.component';
import { Lib1childlib9component2Component } from './lib1childlib9component2/lib1childlib9component2.component';
import { Lib1childlib9component3Component } from './lib1childlib9component3/lib1childlib9component3.component';
import { Lib1childlib9component4Component } from './lib1childlib9component4/lib1childlib9component4.component';
import { Lib1childlib9component5Component } from './lib1childlib9component5/lib1childlib9component5.component';
import { Lib1childlib9component6Component } from './lib1childlib9component6/lib1childlib9component6.component';
import { Lib1childlib9component7Component } from './lib1childlib9component7/lib1childlib9component7.component';
import { Lib1childlib9component8Component } from './lib1childlib9component8/lib1childlib9component8.component';
import { Lib1childlib9component9Component } from './lib1childlib9component9/lib1childlib9component9.component';
import { Lib1childlib9parentComponent } from './lib1childlib9parent/lib1childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Lib1childlib9component0Component,
    Lib1childlib9component1Component,
    Lib1childlib9component2Component,
    Lib1childlib9component3Component,
    Lib1childlib9component4Component,
    Lib1childlib9component5Component,
    Lib1childlib9component6Component,
    Lib1childlib9component7Component,
    Lib1childlib9component8Component,
    Lib1childlib9component9Component,
    Lib1childlib9parentComponent,
  ],
  exports: [Lib1childlib9parentComponent],
})
export class Childlib9Module {}
