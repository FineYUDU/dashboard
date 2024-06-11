// @angular
import { Component } from '@angular/core';
// @components
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumb.component';
import { DropdownAddComponent } from '../dropdown-add/dropdown-add.component';
import { DropdownNotificationsComponent } from '../dropdown-notifications/dropdown-notifications.component';
import { DropdownUserComponent } from '../dropdown-user/dropdown-user.component';

@Component({
  selector: 'navbar-header',
  standalone: true,
  imports: [
    BreadcrumbsComponent,
    DropdownAddComponent,
    DropdownNotificationsComponent,
    DropdownUserComponent,
  ],
  templateUrl: './navbar-header.component.html',
  styleUrl: './navbar-header.component.css'
})
export class NavbarHeaderComponent {
  
}
