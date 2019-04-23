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

@NgModule({
  declarations: [
    AppComponent,
    MosaicIconsComponent,
    KpiDashboardComponent,
    FooterComponent,
    PurchaseOrdersComponent,
    PaginationComponent,
    OnOffCatalogueOrdersComponent
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
