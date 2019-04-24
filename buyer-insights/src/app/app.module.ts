import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { PaginationModule, BsDropdownModule } from 'ngx-bootstrap';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppComponent } from './app.component';
import { MosaicIconsComponent } from './elements/mosaic-icons/mosaic-icons.component';
import { FooterComponent } from './components/footer/footer.component';
import { KpiDashboardComponent } from './components/kpi-dashboard/kpi-dashboard.component';
import { from } from 'rxjs';
import { PurchaseOrdersComponent } from './components/purchase-orders/purchase-orders.component';
import { PaginationComponent } from './elements/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    MosaicIconsComponent,
    FooterComponent,
    KpiDashboardComponent,
    PurchaseOrdersComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GoogleChartsModule.forRoot(),
    FormsModule,
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
