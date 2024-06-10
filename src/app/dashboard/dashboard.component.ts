// @angular
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMenu } from '@models/nav.interfaces';
// @components
import { NavbarHeaderComponent } from '@shared/components/navbar-header/navbar-header.component';
import { SidebarComponent } from '@shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    NavbarHeaderComponent,
    RouterOutlet,
    SidebarComponent,

  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {
  // @params
  isCollapse:boolean = true;
  
  collapseSidebar() {
    this.isCollapse = !this.isCollapse;
  }

  public navigationMenu = signal<NavMenu[]>([
      {
        icon:'icon-overview',
        txt:'menu.overview',
        router:'overview',
      },
      {
        icon:'icon-players',
        txt:'menu.players',
        router:'players',
      },
      {
        icon:'icon-tos',
        txt:'menu.tos',
        router:'tos',
      },
      {
        icon:'icon-tournaments',
        txt:'menu.tournaments',
        router:'tournaments',
      },
  ])

}
