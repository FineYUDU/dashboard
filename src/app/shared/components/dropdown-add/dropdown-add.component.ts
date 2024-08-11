import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TranslatePipe } from '@shared/pipes/translate.pipe';

import { MenusService } from '@services/menus.service';
import { ThemeService } from '@services/theme.service';
import { TranslateService } from '@services/translate.service';



@Component({
  selector: 'dropdown-add',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterModule,
    TranslatePipe,
  ],
  templateUrl: './dropdown-add.component.html',
  styleUrl: './dropdown-add.component.css'
})
export class DropdownAddComponent {

  public translateService = inject( TranslateService );   
  public themeService = inject( ThemeService );   
  public menusService = inject( MenusService );   

  private _el = inject( ElementRef );
  
  isDropdownOpen = signal(false);
  
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) { !this.isClickInsideComponent(event) ? this.isDropdownOpen.set(false) : undefined }

  isClickInsideComponent(event: MouseEvent): boolean {
    const mainContElement = this._el.nativeElement.querySelector('.container');
    return mainContElement.contains(event.target as Node);
  }
  
}

// TODO: Remove HostListener
