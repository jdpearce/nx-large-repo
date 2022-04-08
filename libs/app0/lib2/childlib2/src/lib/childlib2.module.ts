import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib2childlib2component0Component } from './lib2childlib2component0/lib2childlib2component0.component';
import { Lib2childlib2component1Component } from './lib2childlib2component1/lib2childlib2component1.component';
import { Lib2childlib2component2Component } from './lib2childlib2component2/lib2childlib2component2.component';
import { Lib2childlib2component3Component } from './lib2childlib2component3/lib2childlib2component3.component';
import { Lib2childlib2component4Component } from './lib2childlib2component4/lib2childlib2component4.component';
import { Lib2childlib2component5Component } from './lib2childlib2component5/lib2childlib2component5.component';
import { Lib2childlib2component6Component } from './lib2childlib2component6/lib2childlib2component6.component';
import { Lib2childlib2component7Component } from './lib2childlib2component7/lib2childlib2component7.component';
import { Lib2childlib2component8Component } from './lib2childlib2component8/lib2childlib2component8.component';
import { Lib2childlib2component9Component } from './lib2childlib2component9/lib2childlib2component9.component';
import { Lib2childlib2parentComponent } from './lib2childlib2parent/lib2childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Lib2childlib2component0Component,
    Lib2childlib2component1Component,
    Lib2childlib2component2Component,
    Lib2childlib2component3Component,
    Lib2childlib2component4Component,
    Lib2childlib2component5Component,
    Lib2childlib2component6Component,
    Lib2childlib2component7Component,
    Lib2childlib2component8Component,
    Lib2childlib2component9Component,
    Lib2childlib2parentComponent,
  ],
  exports: [Lib2childlib2parentComponent],
})
export class Childlib2Module {}
