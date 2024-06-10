// @angular
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// @services
import { ThemeService } from '@services/theme.service';
import { TranslateService } from '@services/translate.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    // @injections
    private themeService = inject(ThemeService)
    private translateService = inject (TranslateService); 
}
