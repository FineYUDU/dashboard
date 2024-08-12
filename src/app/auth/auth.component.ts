import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslatePipe } from '@shared/pipes/translate.pipe';

import { ThemeService } from '@services/theme.service';
import { TranslateService } from '@services/translate.service';

import { BreadcrumbsComponent } from '@shared/components/breadcrumbs/breadcrumb.component';
import { TranslateDropdownComponent } from '@shared/components/translate-dropdown/translate-dropdown.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    BreadcrumbsComponent,
    NgOptimizedImage,
    RouterModule,
    TranslatePipe,
    TranslateDropdownComponent,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export default class AuthComponent {
  public translateService = inject( TranslateService );
  public themeService = inject(  ThemeService );

}
