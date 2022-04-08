import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib3childlib5component0Component } from './lib3childlib5component0/lib3childlib5component0.component';
import { Lib3childlib5component1Component } from './lib3childlib5component1/lib3childlib5component1.component';
import { Lib3childlib5component2Component } from './lib3childlib5component2/lib3childlib5component2.component';
import { Lib3childlib5component3Component } from './lib3childlib5component3/lib3childlib5component3.component';
import { Lib3childlib5component4Component } from './lib3childlib5component4/lib3childlib5component4.component';
import { Lib3childlib5component5Component } from './lib3childlib5component5/lib3childlib5component5.component';
import { Lib3childlib5component6Component } from './lib3childlib5component6/lib3childlib5component6.component';
import { Lib3childlib5component7Component } from './lib3childlib5component7/lib3childlib5component7.component';
import { Lib3childlib5component8Component } from './lib3childlib5component8/lib3childlib5component8.component';
import { Lib3childlib5component9Component } from './lib3childlib5component9/lib3childlib5component9.component';
import { Lib3childlib5parentComponent } from './lib3childlib5parent/lib3childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Lib3childlib5component0Component,
    Lib3childlib5component1Component,
    Lib3childlib5component2Component,
    Lib3childlib5component3Component,
    Lib3childlib5component4Component,
    Lib3childlib5component5Component,
    Lib3childlib5component6Component,
    Lib3childlib5component7Component,
    Lib3childlib5component8Component,
    Lib3childlib5component9Component,
    Lib3childlib5parentComponent,
  ],
  exports: [Lib3childlib5parentComponent],
})
export class Childlib5Module {}
