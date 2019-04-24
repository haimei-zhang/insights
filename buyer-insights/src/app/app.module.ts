import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { GoogleChartsModule } from 'angular-google-charts';


import { AppComponent } from './app.component';
import { MosaicIconsComponent } from './components/mosaic-icons/mosaic-icons.component';
import { FooterComponent } from './components/footer/footer.component';
import { KpiDashboardComponent } from './components/kpi-dashboard/kpi-dashboard.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    MosaicIconsComponent,
    FooterComponent,
    KpiDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
