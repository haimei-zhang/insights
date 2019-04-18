import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KpiDashboardComponent } from "./components/kpi-dashboard/kpi-dashboard.component";

const routes: Routes = [
  { path: 'kpi-dashboard', component: KpiDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
