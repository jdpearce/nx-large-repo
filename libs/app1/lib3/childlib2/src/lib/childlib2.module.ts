import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib3childlib2component0Component } from './lib3childlib2component0/lib3childlib2component0.component';
import { Lib3childlib2component1Component } from './lib3childlib2component1/lib3childlib2component1.component';
import { Lib3childlib2component2Component } from './lib3childlib2component2/lib3childlib2component2.component';
import { Lib3childlib2component3Component } from './lib3childlib2component3/lib3childlib2component3.component';
import { Lib3childlib2component4Component } from './lib3childlib2component4/lib3childlib2component4.component';
import { Lib3childlib2component5Component } from './lib3childlib2component5/lib3childlib2component5.component';
import { Lib3childlib2component6Component } from './lib3childlib2component6/lib3childlib2component6.component';
import { Lib3childlib2component7Component } from './lib3childlib2component7/lib3childlib2component7.component';
import { Lib3childlib2component8Component } from './lib3childlib2component8/lib3childlib2component8.component';
import { Lib3childlib2component9Component } from './lib3childlib2component9/lib3childlib2component9.component';
import { Lib3childlib2parentComponent } from './lib3childlib2parent/lib3childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Lib3childlib2component0Component,
    Lib3childlib2component1Component,
    Lib3childlib2component2Component,
    Lib3childlib2component3Component,
    Lib3childlib2component4Component,
    Lib3childlib2component5Component,
    Lib3childlib2component6Component,
    Lib3childlib2component7Component,
    Lib3childlib2component8Component,
    Lib3childlib2component9Component,
    Lib3childlib2parentComponent,
  ],
  exports: [Lib3childlib2parentComponent],
})
export class Childlib2Module {}
