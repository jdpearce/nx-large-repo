import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib3childlib1component0Component } from './lib3childlib1component0/lib3childlib1component0.component';
import { Lib3childlib1component1Component } from './lib3childlib1component1/lib3childlib1component1.component';
import { Lib3childlib1component2Component } from './lib3childlib1component2/lib3childlib1component2.component';
import { Lib3childlib1component3Component } from './lib3childlib1component3/lib3childlib1component3.component';
import { Lib3childlib1component4Component } from './lib3childlib1component4/lib3childlib1component4.component';
import { Lib3childlib1component5Component } from './lib3childlib1component5/lib3childlib1component5.component';
import { Lib3childlib1component6Component } from './lib3childlib1component6/lib3childlib1component6.component';
import { Lib3childlib1component7Component } from './lib3childlib1component7/lib3childlib1component7.component';
import { Lib3childlib1component8Component } from './lib3childlib1component8/lib3childlib1component8.component';
import { Lib3childlib1component9Component } from './lib3childlib1component9/lib3childlib1component9.component';
import { Lib3childlib1parentComponent } from './lib3childlib1parent/lib3childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Lib3childlib1component0Component,
    Lib3childlib1component1Component,
    Lib3childlib1component2Component,
    Lib3childlib1component3Component,
    Lib3childlib1component4Component,
    Lib3childlib1component5Component,
    Lib3childlib1component6Component,
    Lib3childlib1component7Component,
    Lib3childlib1component8Component,
    Lib3childlib1component9Component,
    Lib3childlib1parentComponent,
  ],
  exports: [Lib3childlib1parentComponent],
})
export class Childlib1Module {}
