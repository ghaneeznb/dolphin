import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DolphinRoutingModule } from './dolphin-routing.module';
import { LoginComponent } from './components/login/login.component';
import { MonitoringComponent } from './components/monitoring/monitoring.component';
import { UnitsComponent } from './components/units/units.component';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    LoginComponent,
    MonitoringComponent,
    UnitsComponent
  ],
  imports: [
    CommonModule,
    DolphinRoutingModule,
    GoogleMapsModule
  ]
})
export class DolphinModule { }
