// @angular
import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { LocalStorageService } from '@services/localstorage.service';
import { TranslateService } from '@services/translate.service';
// @pipes
import { TranslatePipe } from '@shared/pipes/translate.pipe';

@Component({
  selector: 'translate-dropdown',
  standalone: true,
  imports: [
    CommonModule,
    TranslatePipe,
  ],
  templateUrl: './translate-dropdown.component.html',
  styleUrl: './translate-dropdown.component.css'
})
export class TranslateDropdownComponent  {
  // @injections
  public translateService = inject( TranslateService );
  public localStorageService = inject( LocalStorageService );
  public el = inject( ElementRef );
  // @params
  isDropdownOpen:boolean = false;

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) { !this.isClickInsideComponent(event) ? this.isDropdownOpen = false : undefined }

  isClickInsideComponent(event: MouseEvent): boolean {
    const mainContElement = this.el.nativeElement.querySelector('.main-cont');
    return mainContElement.contains(event.target as Node);
  }
  
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

}
