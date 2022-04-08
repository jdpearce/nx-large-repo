import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib4childlib2component0Component } from './lib4childlib2component0/lib4childlib2component0.component';
import { Lib4childlib2component1Component } from './lib4childlib2component1/lib4childlib2component1.component';
import { Lib4childlib2component2Component } from './lib4childlib2component2/lib4childlib2component2.component';
import { Lib4childlib2component3Component } from './lib4childlib2component3/lib4childlib2component3.component';
import { Lib4childlib2component4Component } from './lib4childlib2component4/lib4childlib2component4.component';
import { Lib4childlib2component5Component } from './lib4childlib2component5/lib4childlib2component5.component';
import { Lib4childlib2component6Component } from './lib4childlib2component6/lib4childlib2component6.component';
import { Lib4childlib2component7Component } from './lib4childlib2component7/lib4childlib2component7.component';
import { Lib4childlib2component8Component } from './lib4childlib2component8/lib4childlib2component8.component';
import { Lib4childlib2component9Component } from './lib4childlib2component9/lib4childlib2component9.component';
import { Lib4childlib2parentComponent } from './lib4childlib2parent/lib4childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Lib4childlib2component0Component,
    Lib4childlib2component1Component,
    Lib4childlib2component2Component,
    Lib4childlib2component3Component,
    Lib4childlib2component4Component,
    Lib4childlib2component5Component,
    Lib4childlib2component6Component,
    Lib4childlib2component7Component,
    Lib4childlib2component8Component,
    Lib4childlib2component9Component,
    Lib4childlib2parentComponent,
  ],
  exports: [Lib4childlib2parentComponent],
})
export class Childlib2Module {}
