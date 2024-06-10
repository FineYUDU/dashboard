// @angular
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
// @services
import { LocalStorageService } from '@services/localstorage.service';
import { TranslateService } from '@services/translate.service';
// @pipes
import { TranslatePipe } from '@shared/pipes/translate.pipe';
// @models
import { NavMenu } from '@models/index.interfaces';

@Component({
  selector: 'add-event',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterModule,
    TranslatePipe,
  ],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {
  // @injections
  public localStorageService = inject( LocalStorageService);
  public translateService = inject( TranslateService );   
  public el = inject( ElementRef );
  // @params
  isDropdownOpen:boolean = false;
  
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) { !this.isClickInsideComponent(event) ? this.isDropdownOpen = false : undefined }

  isClickInsideComponent(event: MouseEvent): boolean {
    const mainContElement = this.el.nativeElement.querySelector('.container');
    return mainContElement.contains(event.target as Node);
  }

  addMenu:NavMenu[] = [
    {
      txt:'menu.new-player',
      router:'new-player',
    },
    {
      txt:'menu.new-tournament',
      router:'new-tournament',
    },
    
  ]
  
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
    
}
