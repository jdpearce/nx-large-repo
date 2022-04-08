import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib2childlib4component0Component } from './lib2childlib4component0/lib2childlib4component0.component';
import { Lib2childlib4component1Component } from './lib2childlib4component1/lib2childlib4component1.component';
import { Lib2childlib4component2Component } from './lib2childlib4component2/lib2childlib4component2.component';
import { Lib2childlib4component3Component } from './lib2childlib4component3/lib2childlib4component3.component';
import { Lib2childlib4component4Component } from './lib2childlib4component4/lib2childlib4component4.component';
import { Lib2childlib4component5Component } from './lib2childlib4component5/lib2childlib4component5.component';
import { Lib2childlib4component6Component } from './lib2childlib4component6/lib2childlib4component6.component';
import { Lib2childlib4component7Component } from './lib2childlib4component7/lib2childlib4component7.component';
import { Lib2childlib4component8Component } from './lib2childlib4component8/lib2childlib4component8.component';
import { Lib2childlib4component9Component } from './lib2childlib4component9/lib2childlib4component9.component';
import { Lib2childlib4parentComponent } from './lib2childlib4parent/lib2childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Lib2childlib4component0Component,
    Lib2childlib4component1Component,
    Lib2childlib4component2Component,
    Lib2childlib4component3Component,
    Lib2childlib4component4Component,
    Lib2childlib4component5Component,
    Lib2childlib4component6Component,
    Lib2childlib4component7Component,
    Lib2childlib4component8Component,
    Lib2childlib4component9Component,
    Lib2childlib4parentComponent,
  ],
  exports: [Lib2childlib4parentComponent],
})
export class Childlib4Module {}
