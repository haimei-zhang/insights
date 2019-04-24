import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KpiDashboardComponent } from './components/kpi-dashboard/kpi-dashboard.component';
import { PurchaseOrdersComponent } from './components/purchase-orders/purchase-orders.component';

const routes: Routes = [
  { path: 'kpi-dashboard', component: KpiDashboardComponent, data: { animation: 'HomePage' } },
  { path: 'purchase-orders', component: PurchaseOrdersComponent, data: { animation: 'DetailPage' } },
  { path: '**', component: KpiDashboardComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
