// @angular
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// @components
import { NavbarHeaderComponent } from './components/navbar-header/navbar-header.component';

@Component({
  selector: 'app-website',
  standalone: true,
  imports: [
    NavbarHeaderComponent,
    RouterModule,
  ],
  templateUrl: './website.component.html',
  styleUrl: './website.component.css'
})
export default class WebsiteComponent {

}
