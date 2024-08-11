import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TranslatePipe } from '@shared/pipes/translate.pipe';

import { ThemeService } from '@services/theme.service';
import { TranslateService } from '@services/translate.service';

import { NavMenu } from '@shared/interfaces/nav.interfaces';


@Component({
  selector: 'dropdown-notifications',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterModule,
    TranslatePipe,
  ],
  templateUrl: './dropdown-notifications.component.html',
  styleUrl: './dropdown-notifications.component.css'
})
export class DropdownNotificationsComponent {
  public themeService = inject( ThemeService);
  public translateService = inject( TranslateService ); 
  private _el = inject( ElementRef );
  
  isDropdownOpen = signal(false);
  addMenu = signal<NavMenu[]>([])
  
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) { !this.isClickInsideComponent(event) ? this.isDropdownOpen.set(false) : undefined }

  isClickInsideComponent(event: MouseEvent): boolean {
    const mainContElement = this._el.nativeElement.querySelector('.container');
    return mainContElement.contains(event.target as Node);
  }
  
      

}
