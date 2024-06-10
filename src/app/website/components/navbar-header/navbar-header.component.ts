// @angular
import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
// @services
import { LocalStorageService } from '@services/localstorage.service';
import { TranslateService } from '@services/translate.service';
// @pipes
import { TranslatePipe } from '@shared/pipes/translate.pipe';
// @components
import { ToggleThemeComponent } from '@shared/components/toggle-theme/toggle-theme.component';
import { TranslateDropdownComponent } from '@shared/components/translate-dropdown/translate-dropdown.component';

@Component({
  selector: 'navbar-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterModule,
    ToggleThemeComponent,
    TranslateDropdownComponent,
    TranslatePipe,
  ],
  templateUrl: './navbar-header.component.html',
  styleUrl: './navbar-header.component.css'
})
export class NavbarHeaderComponent {
  // @injections
  public translateService = inject( TranslateService );
  public localStorageService = inject( LocalStorageService );
  // @params

}
