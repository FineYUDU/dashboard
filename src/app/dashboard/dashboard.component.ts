import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MenusService } from '../core/services/menus.service';

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
  
  public menusService = inject( MenusService );

}
