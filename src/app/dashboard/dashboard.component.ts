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
        icon:'icon-teachers',
        txt:'menu.teachers',
        router:'teachers',
      },
      {
        icon:'icon-students',
        txt:'menu.students',
        router:'students',
      },
      {
        icon:'icon-classes',
        txt:'menu.classes',
        router:'classes',
      },
      {
        icon:'icon-events',
        txt:'menu.events',
        router:'events',
      },
  ])

}
