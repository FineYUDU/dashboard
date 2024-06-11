// @angular
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, HostListener, inject } from '@angular/core';
// @services
import { LocalStorageService } from '@services/localstorage.service';
import { TranslateService } from '@services/translate.service';
// @pipes
import { TranslatePipe } from '@shared/pipes/translate.pipe';


@Component({
  selector: 'dropdown-translate',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    TranslatePipe,
  ],
  templateUrl: './dropdown-translate.component.html',
  styleUrl: './dropdown-translate.component.css'
})
export class DropdownTranslateComponent {
  // @injections
  public translateService = inject( TranslateService );
  public localStorageService = inject( LocalStorageService );
  public el = inject( ElementRef );
  // @params
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
