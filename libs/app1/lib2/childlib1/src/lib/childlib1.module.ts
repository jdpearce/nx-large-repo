import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib2childlib1component0Component } from './lib2childlib1component0/lib2childlib1component0.component';
import { Lib2childlib1component1Component } from './lib2childlib1component1/lib2childlib1component1.component';
import { Lib2childlib1component2Component } from './lib2childlib1component2/lib2childlib1component2.component';
import { Lib2childlib1component3Component } from './lib2childlib1component3/lib2childlib1component3.component';
import { Lib2childlib1component4Component } from './lib2childlib1component4/lib2childlib1component4.component';
import { Lib2childlib1component5Component } from './lib2childlib1component5/lib2childlib1component5.component';
import { Lib2childlib1component6Component } from './lib2childlib1component6/lib2childlib1component6.component';
import { Lib2childlib1component7Component } from './lib2childlib1component7/lib2childlib1component7.component';
import { Lib2childlib1component8Component } from './lib2childlib1component8/lib2childlib1component8.component';
import { Lib2childlib1component9Component } from './lib2childlib1component9/lib2childlib1component9.component';
import { Lib2childlib1parentComponent } from './lib2childlib1parent/lib2childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Lib2childlib1component0Component,
    Lib2childlib1component1Component,
    Lib2childlib1component2Component,
    Lib2childlib1component3Component,
    Lib2childlib1component4Component,
    Lib2childlib1component5Component,
    Lib2childlib1component6Component,
    Lib2childlib1component7Component,
    Lib2childlib1component8Component,
    Lib2childlib1component9Component,
    Lib2childlib1parentComponent,
  ],
  exports: [Lib2childlib1parentComponent],
})
export class Childlib1Module {}
