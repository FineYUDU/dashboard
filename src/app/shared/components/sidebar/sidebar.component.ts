import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { enviroment } from '../../../../enviroments/enviroment';

import { TranslatePipe } from '@shared/pipes/translate.pipe';

import { MenusService } from '@services/menus.service';
import { ThemeService } from '@services/theme.service';
import { TranslateService } from '@services/translate.service';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterModule,
    TranslatePipe,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  public themeService = inject( ThemeService );
  public translateService = inject( TranslateService );
  public menusService = inject( MenusService );
  
  version:string = enviroment.version;

}
