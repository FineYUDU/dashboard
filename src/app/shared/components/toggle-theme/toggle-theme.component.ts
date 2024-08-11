import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';

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
  public themeService = inject( ThemeService );
}
