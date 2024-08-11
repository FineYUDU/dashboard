import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateService } from '@services/translate.service';

import { TranslatePipe } from '@shared/pipes/translate.pipe';

import { BreadcrumbsComponent } from '@shared/components/breadcrumbs/breadcrumb.component';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    BreadcrumbsComponent,
    NgOptimizedImage,
    RouterModule,
    TranslatePipe,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export default class AuthComponent {
  public translateService = inject( TranslateService );
  public themeService = inject(  ThemeService );

}
