// @agular
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
// @service
import { LocalStorageService } from '@services/localstorage.service';
import { TranslateService } from '@services/translate.service';
// @pipe
import { TranslatePipe } from '@shared/pipes/translate.pipe';
import { ThemeService } from '@services/theme.service';
import { NavMenu } from '@models/index.interfaces';
import { enviroment } from '../../../../enviroments/enviroment';
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
  // @injections
  public localStorageService = inject( LocalStorageService );
  public translateService = inject( TranslateService );
  public themeService = inject( ThemeService );
  // @params
  @Output() isCollapseSidebar: EventEmitter<void> = new EventEmitter<void>();
  @Input() navigationMenu:NavMenu[] = [];
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
