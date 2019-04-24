import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KpiDashboardComponent } from "./components/kpi-dashboard/kpi-dashboard.component";
import { PurchaseOrdersComponent } from "./components/purchase-orders/purchase-orders.component";
import { OnOffCatalogueOrdersComponent } from "./components/on-off-catalogue-orders/on-off-catalogue-orders.component";
import { InvoicesComponent } from "./components/invoices/invoices.component";
import { TopCategoriesComponent } from "./components/top-categories/top-categories.component";
import { TopCustomersComponent } from "./components/top-customers/top-customers.component";
import { TopProductsComponent } from "./components/top-products/top-products.component";
import { MarketShareComponent } from "./components/market-share/market-share.component";
import { SearchInsightsComponent } from "./components/search-insights/search-insights.component";
import { SearchTermInsightsComponent } from "./components/search-term-insights/search-term-insights.component";
import { ListPriceDiscountComponent } from "./components/list-price-discount/list-price-discount.component";

const routes: Routes = [
  { path: '', redirectTo: '/kpi-dashboard', pathMatch: 'full' },
  { path: 'kpi-dashboard', component: KpiDashboardComponent},
  { path: 'purchase-orders', component: PurchaseOrdersComponent},
  { path: 'on-off-catalogue-orders', component: OnOffCatalogueOrdersComponent},
  { path: 'invoices', component: InvoicesComponent},
  { path: 'top-categories', component: TopCategoriesComponent},
  { path: 'top-customers', component: TopCustomersComponent},
  { path: 'top-products', component: TopProductsComponent},
  { path: 'market-share', component: MarketShareComponent},
  { path: 'search-insights', component: SearchInsightsComponent},
  { path: 'search-term-insights', component: SearchTermInsightsComponent},
  { path: 'list-price-discount', component: ListPriceDiscountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
