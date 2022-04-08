import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib1childlib6component0Component } from './lib1childlib6component0/lib1childlib6component0.component';
import { Lib1childlib6component1Component } from './lib1childlib6component1/lib1childlib6component1.component';
import { Lib1childlib6component2Component } from './lib1childlib6component2/lib1childlib6component2.component';
import { Lib1childlib6component3Component } from './lib1childlib6component3/lib1childlib6component3.component';
import { Lib1childlib6component4Component } from './lib1childlib6component4/lib1childlib6component4.component';
import { Lib1childlib6component5Component } from './lib1childlib6component5/lib1childlib6component5.component';
import { Lib1childlib6component6Component } from './lib1childlib6component6/lib1childlib6component6.component';
import { Lib1childlib6component7Component } from './lib1childlib6component7/lib1childlib6component7.component';
import { Lib1childlib6component8Component } from './lib1childlib6component8/lib1childlib6component8.component';
import { Lib1childlib6component9Component } from './lib1childlib6component9/lib1childlib6component9.component';
import { Lib1childlib6parentComponent } from './lib1childlib6parent/lib1childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Lib1childlib6component0Component,
    Lib1childlib6component1Component,
    Lib1childlib6component2Component,
    Lib1childlib6component3Component,
    Lib1childlib6component4Component,
    Lib1childlib6component5Component,
    Lib1childlib6component6Component,
    Lib1childlib6component7Component,
    Lib1childlib6component8Component,
    Lib1childlib6component9Component,
    Lib1childlib6parentComponent,
  ],
  exports: [Lib1childlib6parentComponent],
})
export class Childlib6Module {}
