import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib1childlib2component0Component } from './lib1childlib2component0/lib1childlib2component0.component';
import { Lib1childlib2component1Component } from './lib1childlib2component1/lib1childlib2component1.component';
import { Lib1childlib2component2Component } from './lib1childlib2component2/lib1childlib2component2.component';
import { Lib1childlib2component3Component } from './lib1childlib2component3/lib1childlib2component3.component';
import { Lib1childlib2component4Component } from './lib1childlib2component4/lib1childlib2component4.component';
import { Lib1childlib2component5Component } from './lib1childlib2component5/lib1childlib2component5.component';
import { Lib1childlib2component6Component } from './lib1childlib2component6/lib1childlib2component6.component';
import { Lib1childlib2component7Component } from './lib1childlib2component7/lib1childlib2component7.component';
import { Lib1childlib2component8Component } from './lib1childlib2component8/lib1childlib2component8.component';
import { Lib1childlib2component9Component } from './lib1childlib2component9/lib1childlib2component9.component';
import { Lib1childlib2parentComponent } from './lib1childlib2parent/lib1childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Lib1childlib2component0Component,
    Lib1childlib2component1Component,
    Lib1childlib2component2Component,
    Lib1childlib2component3Component,
    Lib1childlib2component4Component,
    Lib1childlib2component5Component,
    Lib1childlib2component6Component,
    Lib1childlib2component7Component,
    Lib1childlib2component8Component,
    Lib1childlib2component9Component,
    Lib1childlib2parentComponent,
  ],
  exports: [Lib1childlib2parentComponent],
})
export class Childlib2Module {}
