// @angular
import { Component } from '@angular/core';
// @components
import { AddEventComponent } from '../add-event/add-event.component';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumb.component';
import { NotificationsComponent } from '../notifications/notifications.component';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'navbar-header',
  standalone: true,
  imports: [
    AddEventComponent,
    BreadcrumbsComponent,
    NotificationsComponent,
    UserComponent,
  ],
  templateUrl: './navbar-header.component.html',
  styleUrl: './navbar-header.component.css'
})
export class NavbarHeaderComponent {
}
