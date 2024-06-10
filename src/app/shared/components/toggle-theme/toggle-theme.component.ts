// @angular
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LocalStorageService } from '@services/localstorage.service';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'toggle-theme',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
  ],
  templateUrl: './toggle-theme.component.html',
  styleUrl: './toggle-theme.component.css'
})
export class ToggleThemeComponent {
  // @injections
  public themeService = inject( ThemeService );
  public localStorageService = inject( LocalStorageService );
}
