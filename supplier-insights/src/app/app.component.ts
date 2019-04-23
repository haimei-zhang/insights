import { Component } from '@angular/core';

@Component({
  selector: 'supplier-insights-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'supplier-insights';
  sidebarToggled = false;
  showSidebar = {};

  toggleSidebar(): void {
    this.sidebarToggled = !this.sidebarToggled;
  }
}
