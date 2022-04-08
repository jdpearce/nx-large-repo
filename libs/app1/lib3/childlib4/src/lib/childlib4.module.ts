import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib3childlib4component0Component } from './lib3childlib4component0/lib3childlib4component0.component';
import { Lib3childlib4component1Component } from './lib3childlib4component1/lib3childlib4component1.component';
import { Lib3childlib4component2Component } from './lib3childlib4component2/lib3childlib4component2.component';
import { Lib3childlib4component3Component } from './lib3childlib4component3/lib3childlib4component3.component';
import { Lib3childlib4component4Component } from './lib3childlib4component4/lib3childlib4component4.component';
import { Lib3childlib4component5Component } from './lib3childlib4component5/lib3childlib4component5.component';
import { Lib3childlib4component6Component } from './lib3childlib4component6/lib3childlib4component6.component';
import { Lib3childlib4component7Component } from './lib3childlib4component7/lib3childlib4component7.component';
import { Lib3childlib4component8Component } from './lib3childlib4component8/lib3childlib4component8.component';
import { Lib3childlib4component9Component } from './lib3childlib4component9/lib3childlib4component9.component';
import { Lib3childlib4parentComponent } from './lib3childlib4parent/lib3childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Lib3childlib4component0Component,
    Lib3childlib4component1Component,
    Lib3childlib4component2Component,
    Lib3childlib4component3Component,
    Lib3childlib4component4Component,
    Lib3childlib4component5Component,
    Lib3childlib4component6Component,
    Lib3childlib4component7Component,
    Lib3childlib4component8Component,
    Lib3childlib4component9Component,
    Lib3childlib4parentComponent,
  ],
  exports: [Lib3childlib4parentComponent],
})
export class Childlib4Module {}
