import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib4childlib5component0Component } from './lib4childlib5component0/lib4childlib5component0.component';
import { Lib4childlib5component1Component } from './lib4childlib5component1/lib4childlib5component1.component';
import { Lib4childlib5component2Component } from './lib4childlib5component2/lib4childlib5component2.component';
import { Lib4childlib5component3Component } from './lib4childlib5component3/lib4childlib5component3.component';
import { Lib4childlib5component4Component } from './lib4childlib5component4/lib4childlib5component4.component';
import { Lib4childlib5component5Component } from './lib4childlib5component5/lib4childlib5component5.component';
import { Lib4childlib5component6Component } from './lib4childlib5component6/lib4childlib5component6.component';
import { Lib4childlib5component7Component } from './lib4childlib5component7/lib4childlib5component7.component';
import { Lib4childlib5component8Component } from './lib4childlib5component8/lib4childlib5component8.component';
import { Lib4childlib5component9Component } from './lib4childlib5component9/lib4childlib5component9.component';
import { Lib4childlib5parentComponent } from './lib4childlib5parent/lib4childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Lib4childlib5component0Component,
    Lib4childlib5component1Component,
    Lib4childlib5component2Component,
    Lib4childlib5component3Component,
    Lib4childlib5component4Component,
    Lib4childlib5component5Component,
    Lib4childlib5component6Component,
    Lib4childlib5component7Component,
    Lib4childlib5component8Component,
    Lib4childlib5component9Component,
    Lib4childlib5parentComponent,
  ],
  exports: [Lib4childlib5parentComponent],
})
export class Childlib5Module {}
