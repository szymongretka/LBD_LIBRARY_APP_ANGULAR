import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultTrackingRoutingModule } from './default-tracking-routing.module';
import { DefaultComponent } from './default/default.component';


@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    DefaultTrackingRoutingModule
  ],
  exports: [DefaultComponent]
})
export class DefaultTrackingModule { }
