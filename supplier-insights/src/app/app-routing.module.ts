import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KpiDashboardComponent } from "./components/kpi-dashboard/kpi-dashboard.component";
import { PurchaseOrdersComponent } from "./components/purchase-orders/purchase-orders.component";
import { OnOffCatalogueOrdersComponent } from "./components/on-off-catalogue-orders/on-off-catalogue-orders.component";

const routes: Routes = [
  { path: 'kpi-dashboard', component: KpiDashboardComponent},
  { path: 'purchase-orders', component: PurchaseOrdersComponent},
  { path: 'on-off-catalogue-orders', component: OnOffCatalogueOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
