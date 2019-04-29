import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { BsDropdownModule, PaginationModule, TabsModule, TooltipModule } from "ngx-bootstrap";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { KpiDashboardComponent } from './components/kpi-dashboard/kpi-dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { PurchaseOrdersComponent } from './components/purchase-orders/purchase-orders.component';
import { OnOffCatalogueOrdersComponent } from './components/on-off-catalogue-orders/on-off-catalogue-orders.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { TopCategoriesComponent } from './components/top-categories/top-categories.component';
import { TopCustomersComponent } from './components/top-customers/top-customers.component';
import { TopProductsComponent } from './components/top-products/top-products.component';
import { MarketShareComponent } from './components/market-share/market-share.component';
import { SearchInsightsComponent } from './components/search-insights/search-insights.component';
import { SearchTermInsightsComponent } from './components/search-term-insights/search-term-insights.component';
import { ListPriceDiscountComponent } from './components/list-price-discount/list-price-discount.component';

import { PaginationComponent } from './elements/pagination/pagination.component';
import { MosaicIconsComponent } from './elements/mosaic-icons/mosaic-icons.component';
import { OrderTableComponent } from './elements/order-table/order-table.component';
import { BarChartComponent } from './elements/bar-chart/bar-chart.component';
import { LineChartComponent } from './elements/line-chart/line-chart.component';
import { StackBarChartComponent } from './elements/stack-bar-chart/stack-bar-chart.component';
import { PieChartComponent } from './elements/pie-chart/pie-chart.component';

import { createTranslateLoader } from './utils/translate-loader.util';

@NgModule({
  declarations: [
    AppComponent,
    KpiDashboardComponent,
    FooterComponent,
    PurchaseOrdersComponent,
    OnOffCatalogueOrdersComponent,
    InvoicesComponent,
    TopCategoriesComponent,
    TopCustomersComponent,
    TopProductsComponent,
    MarketShareComponent,
    SearchInsightsComponent,
    SearchTermInsightsComponent,
    ListPriceDiscountComponent,
    MosaicIconsComponent,
    PaginationComponent,
    OrderTableComponent,
    BarChartComponent,
    LineChartComponent,
    StackBarChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
