import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib1childlib1component0Component } from './lib1childlib1component0/lib1childlib1component0.component';
import { Lib1childlib1component1Component } from './lib1childlib1component1/lib1childlib1component1.component';
import { Lib1childlib1component2Component } from './lib1childlib1component2/lib1childlib1component2.component';
import { Lib1childlib1component3Component } from './lib1childlib1component3/lib1childlib1component3.component';
import { Lib1childlib1component4Component } from './lib1childlib1component4/lib1childlib1component4.component';
import { Lib1childlib1component5Component } from './lib1childlib1component5/lib1childlib1component5.component';
import { Lib1childlib1component6Component } from './lib1childlib1component6/lib1childlib1component6.component';
import { Lib1childlib1component7Component } from './lib1childlib1component7/lib1childlib1component7.component';
import { Lib1childlib1component8Component } from './lib1childlib1component8/lib1childlib1component8.component';
import { Lib1childlib1component9Component } from './lib1childlib1component9/lib1childlib1component9.component';
import { Lib1childlib1parentComponent } from './lib1childlib1parent/lib1childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Lib1childlib1component0Component,
    Lib1childlib1component1Component,
    Lib1childlib1component2Component,
    Lib1childlib1component3Component,
    Lib1childlib1component4Component,
    Lib1childlib1component5Component,
    Lib1childlib1component6Component,
    Lib1childlib1component7Component,
    Lib1childlib1component8Component,
    Lib1childlib1component9Component,
    Lib1childlib1parentComponent,
  ],
  exports: [Lib1childlib1parentComponent],
})
export class Childlib1Module {}
