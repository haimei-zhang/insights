import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { BsDropdownModule, PaginationModule } from "ngx-bootstrap";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MosaicIconsComponent } from './components/mosaic-icons/mosaic-icons.component';
import { KpiDashboardComponent } from './components/kpi-dashboard/kpi-dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { PurchaseOrdersComponent } from './components/purchase-orders/purchase-orders.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { OnOffCatalogueOrdersComponent } from './components/on-off-catalogue-orders/on-off-catalogue-orders.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { TopCategoriesComponent } from './components/top-categories/top-categories.component';
import { TopCustomersComponent } from './components/top-customers/top-customers.component';
import { TopProductsComponent } from './components/top-products/top-products.component';
import { MarketShareComponent } from './components/market-share/market-share.component';
import { SearchInsightsComponent } from './components/search-insights/search-insights.component';
import { SearchTermInsightsComponent } from './components/search-term-insights/search-term-insights.component';
import { ListPriceDiscountComponent } from './components/list-price-discount/list-price-discount.component';

import { BigChartComponent } from './elements/big-chart/big-chart.component';
import { SmallChartComponent } from './elements/small-chart/small-chart.component';
import { OrderTableComponent } from './elements/order-table/order-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MosaicIconsComponent,
    KpiDashboardComponent,
    FooterComponent,
    PurchaseOrdersComponent,
    PaginationComponent,
    OnOffCatalogueOrdersComponent,
    InvoicesComponent,
    TopCategoriesComponent,
    TopCustomersComponent,
    TopProductsComponent,
    MarketShareComponent,
    SearchInsightsComponent,
    SearchTermInsightsComponent,
    ListPriceDiscountComponent,
    BigChartComponent,
    SmallChartComponent,
    OrderTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
