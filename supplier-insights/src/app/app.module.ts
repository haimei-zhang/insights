import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MosaicIconsComponent } from './components/mosaic-icons/mosaic-icons.component';
import { KpiDashboardComponent } from './components/kpi-dashboard/kpi-dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { PurchaseOrdersComponent } from './components/purchase-orders/purchase-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    MosaicIconsComponent,
    KpiDashboardComponent,
    FooterComponent,
    PurchaseOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
