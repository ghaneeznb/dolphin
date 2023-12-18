import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DolphinRoutingModule } from './dolphin-routing.module';
import { LoginComponent } from './components/login/login.component';
import { UnitsComponent } from './components/units/units.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { appReducers } from '../store/reducers/app.reducers';
import { MonitoringComponent } from './components/monitoring/monitoring.component';


@NgModule({
  declarations: [
    LoginComponent,
    MonitoringComponent,
    UnitsComponent,
  ],
  imports: [
    CommonModule,
    DolphinRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
  ]
})
export class DolphinModule { }
