import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib1childlib4component0Component } from './lib1childlib4component0/lib1childlib4component0.component';
import { Lib1childlib4component1Component } from './lib1childlib4component1/lib1childlib4component1.component';
import { Lib1childlib4component2Component } from './lib1childlib4component2/lib1childlib4component2.component';
import { Lib1childlib4component3Component } from './lib1childlib4component3/lib1childlib4component3.component';
import { Lib1childlib4component4Component } from './lib1childlib4component4/lib1childlib4component4.component';
import { Lib1childlib4component5Component } from './lib1childlib4component5/lib1childlib4component5.component';
import { Lib1childlib4component6Component } from './lib1childlib4component6/lib1childlib4component6.component';
import { Lib1childlib4component7Component } from './lib1childlib4component7/lib1childlib4component7.component';
import { Lib1childlib4component8Component } from './lib1childlib4component8/lib1childlib4component8.component';
import { Lib1childlib4component9Component } from './lib1childlib4component9/lib1childlib4component9.component';
import { Lib1childlib4parentComponent } from './lib1childlib4parent/lib1childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Lib1childlib4component0Component,
    Lib1childlib4component1Component,
    Lib1childlib4component2Component,
    Lib1childlib4component3Component,
    Lib1childlib4component4Component,
    Lib1childlib4component5Component,
    Lib1childlib4component6Component,
    Lib1childlib4component7Component,
    Lib1childlib4component8Component,
    Lib1childlib4component9Component,
    Lib1childlib4parentComponent,
  ],
  exports: [Lib1childlib4parentComponent],
})
export class Childlib4Module {}
