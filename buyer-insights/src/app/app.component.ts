import { Component } from '@angular/core';

@Component({
  selector: 'buyer-insights-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'buyer-insights';
  sidebarToggled = false;

  toggleSidebar(): void {
    this.sidebarToggled = !this.sidebarToggled;
  }
}
