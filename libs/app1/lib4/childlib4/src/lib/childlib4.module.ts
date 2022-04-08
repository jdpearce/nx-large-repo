import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib4childlib4component0Component } from './lib4childlib4component0/lib4childlib4component0.component';
import { Lib4childlib4component1Component } from './lib4childlib4component1/lib4childlib4component1.component';
import { Lib4childlib4component2Component } from './lib4childlib4component2/lib4childlib4component2.component';
import { Lib4childlib4component3Component } from './lib4childlib4component3/lib4childlib4component3.component';
import { Lib4childlib4component4Component } from './lib4childlib4component4/lib4childlib4component4.component';
import { Lib4childlib4component5Component } from './lib4childlib4component5/lib4childlib4component5.component';
import { Lib4childlib4component6Component } from './lib4childlib4component6/lib4childlib4component6.component';
import { Lib4childlib4component7Component } from './lib4childlib4component7/lib4childlib4component7.component';
import { Lib4childlib4component8Component } from './lib4childlib4component8/lib4childlib4component8.component';
import { Lib4childlib4component9Component } from './lib4childlib4component9/lib4childlib4component9.component';
import { Lib4childlib4parentComponent } from './lib4childlib4parent/lib4childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Lib4childlib4component0Component,
    Lib4childlib4component1Component,
    Lib4childlib4component2Component,
    Lib4childlib4component3Component,
    Lib4childlib4component4Component,
    Lib4childlib4component5Component,
    Lib4childlib4component6Component,
    Lib4childlib4component7Component,
    Lib4childlib4component8Component,
    Lib4childlib4component9Component,
    Lib4childlib4parentComponent,
  ],
  exports: [Lib4childlib4parentComponent],
})
export class Childlib4Module {}
