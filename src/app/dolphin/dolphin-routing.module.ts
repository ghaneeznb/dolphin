import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UnitsComponent } from './components/units/units.component';
import { MonitoringComponent } from './components/monitoring/monitoring.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'units', component: UnitsComponent },
  { path: 'monitoring', component: MonitoringComponent },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DolphinRoutingModule { }
