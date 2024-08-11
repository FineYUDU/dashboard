import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AuthService } from '../auth/services/auth.service';

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
  
  private authService = inject( AuthService );

  public user = computed( () => this.authService.currentUser() )

}
