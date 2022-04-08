import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib3childlib6component0Component } from './lib3childlib6component0/lib3childlib6component0.component';
import { Lib3childlib6component1Component } from './lib3childlib6component1/lib3childlib6component1.component';
import { Lib3childlib6component2Component } from './lib3childlib6component2/lib3childlib6component2.component';
import { Lib3childlib6component3Component } from './lib3childlib6component3/lib3childlib6component3.component';
import { Lib3childlib6component4Component } from './lib3childlib6component4/lib3childlib6component4.component';
import { Lib3childlib6component5Component } from './lib3childlib6component5/lib3childlib6component5.component';
import { Lib3childlib6component6Component } from './lib3childlib6component6/lib3childlib6component6.component';
import { Lib3childlib6component7Component } from './lib3childlib6component7/lib3childlib6component7.component';
import { Lib3childlib6component8Component } from './lib3childlib6component8/lib3childlib6component8.component';
import { Lib3childlib6component9Component } from './lib3childlib6component9/lib3childlib6component9.component';
import { Lib3childlib6parentComponent } from './lib3childlib6parent/lib3childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Lib3childlib6component0Component,
    Lib3childlib6component1Component,
    Lib3childlib6component2Component,
    Lib3childlib6component3Component,
    Lib3childlib6component4Component,
    Lib3childlib6component5Component,
    Lib3childlib6component6Component,
    Lib3childlib6component7Component,
    Lib3childlib6component8Component,
    Lib3childlib6component9Component,
    Lib3childlib6parentComponent,
  ],
  exports: [Lib3childlib6parentComponent],
})
export class Childlib6Module {}
