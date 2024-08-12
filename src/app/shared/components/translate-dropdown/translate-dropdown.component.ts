import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, HostListener, inject } from '@angular/core';

import { TranslatePipe } from '../../pipes/translate.pipe';

import { ThemeService } from '../../../core/services/theme.service';
import { TranslateService } from '../../../core/services/translate.service';


@Component({
  selector: 'translate-dropdown',
  standalone: true,
  imports: [
    TranslatePipe,
    NgOptimizedImage,
    CommonModule,
  ],
  templateUrl: './translate-dropdown.component.html',
  styleUrl: './translate-dropdown.component.css'
})
export class TranslateDropdownComponent {
  
  public translateService = inject( TranslateService );
  public themeService = inject( ThemeService );
  public el = inject( ElementRef );
  

  isDropdownOpen:boolean = false;

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) { !this.isClickInsideComponent(event) ? this.isDropdownOpen = false : undefined }

  isClickInsideComponent(event: MouseEvent): boolean {
    const mainContElement = this.el.nativeElement.querySelector('.container');
    return mainContElement.contains(event.target as Node);
  }
  
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

}
