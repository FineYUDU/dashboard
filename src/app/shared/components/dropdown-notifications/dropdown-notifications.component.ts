// @angular
import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
// @services
import { LocalStorageService } from '@services/localstorage.service';
import { TranslateService } from '@services/translate.service';
// @pipes
import { TranslatePipe } from '@shared/pipes/translate.pipe';
// @models
import { NavMenu } from '@models/index.interfaces';
import { RouterModule } from '@angular/router';

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
  // @injections
  public localStorageService = inject( LocalStorageService);
  public translateService = inject( TranslateService ); 
  public el = inject( ElementRef );
  // @params
  isDropdownOpen = signal(false);
  addMenu = signal<NavMenu[]>([])
  
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) { !this.isClickInsideComponent(event) ? this.isDropdownOpen.set(false) : undefined }

  isClickInsideComponent(event: MouseEvent): boolean {
    const mainContElement = this.el.nativeElement.querySelector('.container');
    return mainContElement.contains(event.target as Node);
  }
  
      

}
