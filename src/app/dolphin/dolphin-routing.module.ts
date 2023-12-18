import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UnitsComponent } from './components/units/units.component';
import { MonitoringComponent } from './components/monitoring/monitoring.component';
import { AuthGuard } from './services/auth-gard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'units' },
  { path: 'login', component: LoginComponent },
  { path: 'units', component: UnitsComponent, canActivate: [AuthGuard] },
  { path: 'monitoring', component: MonitoringComponent, canActivate: [AuthGuard] },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DolphinRoutingModule { }
