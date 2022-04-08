import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib0childlib1component0Component } from './lib0childlib1component0/lib0childlib1component0.component';
import { Lib0childlib1component1Component } from './lib0childlib1component1/lib0childlib1component1.component';
import { Lib0childlib1component2Component } from './lib0childlib1component2/lib0childlib1component2.component';
import { Lib0childlib1component3Component } from './lib0childlib1component3/lib0childlib1component3.component';
import { Lib0childlib1component4Component } from './lib0childlib1component4/lib0childlib1component4.component';
import { Lib0childlib1component5Component } from './lib0childlib1component5/lib0childlib1component5.component';
import { Lib0childlib1component6Component } from './lib0childlib1component6/lib0childlib1component6.component';
import { Lib0childlib1component7Component } from './lib0childlib1component7/lib0childlib1component7.component';
import { Lib0childlib1component8Component } from './lib0childlib1component8/lib0childlib1component8.component';
import { Lib0childlib1component9Component } from './lib0childlib1component9/lib0childlib1component9.component';
import { Lib0childlib1parentComponent } from './lib0childlib1parent/lib0childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Lib0childlib1component0Component,
    Lib0childlib1component1Component,
    Lib0childlib1component2Component,
    Lib0childlib1component3Component,
    Lib0childlib1component4Component,
    Lib0childlib1component5Component,
    Lib0childlib1component6Component,
    Lib0childlib1component7Component,
    Lib0childlib1component8Component,
    Lib0childlib1component9Component,
    Lib0childlib1parentComponent,
  ],
  exports: [Lib0childlib1parentComponent],
})
export class Childlib1Module {}
