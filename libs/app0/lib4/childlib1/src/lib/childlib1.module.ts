import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib4childlib1component0Component } from './lib4childlib1component0/lib4childlib1component0.component';
import { Lib4childlib1component1Component } from './lib4childlib1component1/lib4childlib1component1.component';
import { Lib4childlib1component2Component } from './lib4childlib1component2/lib4childlib1component2.component';
import { Lib4childlib1component3Component } from './lib4childlib1component3/lib4childlib1component3.component';
import { Lib4childlib1component4Component } from './lib4childlib1component4/lib4childlib1component4.component';
import { Lib4childlib1component5Component } from './lib4childlib1component5/lib4childlib1component5.component';
import { Lib4childlib1component6Component } from './lib4childlib1component6/lib4childlib1component6.component';
import { Lib4childlib1component7Component } from './lib4childlib1component7/lib4childlib1component7.component';
import { Lib4childlib1component8Component } from './lib4childlib1component8/lib4childlib1component8.component';
import { Lib4childlib1component9Component } from './lib4childlib1component9/lib4childlib1component9.component';
import { Lib4childlib1parentComponent } from './lib4childlib1parent/lib4childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Lib4childlib1component0Component,
    Lib4childlib1component1Component,
    Lib4childlib1component2Component,
    Lib4childlib1component3Component,
    Lib4childlib1component4Component,
    Lib4childlib1component5Component,
    Lib4childlib1component6Component,
    Lib4childlib1component7Component,
    Lib4childlib1component8Component,
    Lib4childlib1component9Component,
    Lib4childlib1parentComponent,
  ],
  exports: [Lib4childlib1parentComponent],
})
export class Childlib1Module {}
