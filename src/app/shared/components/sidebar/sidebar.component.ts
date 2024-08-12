import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

import { enviroment } from '../../../../enviroments/enviroment';

import { TranslatePipe } from '@shared/pipes/translate.pipe';

import { MenusService } from '@services/menus.service';
import { ThemeService } from '@services/theme.service';
import { TranslateService } from '@services/translate.service';

import { NavMenu } from '@shared/interfaces/nav.interfaces';

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
  @Output() isCollapseSidebar: EventEmitter<void> = new EventEmitter<void>();
  @Input() navigationMenu:NavMenu[] = [];
  
  public themeService = inject( ThemeService );
  public translateService = inject( TranslateService );
  public menusService = inject( MenusService );
  
  isCollapse:boolean = true;
  isTranslateDropdownCollapse:boolean = true;
  isAppearanceDropdownCollapse:boolean = true;
  version:string = enviroment.version;

  collapseSidebar(){
    this.isTranslateDropdownCollapse = true;
    this.isAppearanceDropdownCollapse = true;
    this.isCollapse = !this.isCollapse;
    this.isCollapseSidebar.emit();
  }
  dropdownTranslate() {
    this.isAppearanceDropdownCollapse = true;
    this.isTranslateDropdownCollapse = !this.isTranslateDropdownCollapse;
  }
  dropdownAppearance() {
    this.isTranslateDropdownCollapse = true;
    this.isAppearanceDropdownCollapse = !this.isAppearanceDropdownCollapse;
  }
  collapseAllDropdowns() {
    this.isTranslateDropdownCollapse = true;
    this.isAppearanceDropdownCollapse = true;
  }

}
