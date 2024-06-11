// @angular
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
// @services
import { LocalStorageService } from '@services/localstorage.service';
import { TranslateService } from '@services/translate.service';
// @pipes
import { TranslatePipe } from '@shared/pipes/translate.pipe';
// @models
import { NavMenu } from '@models/index.interfaces';

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
  // @injections
  public localStorageService = inject( LocalStorageService);
  public translateService = inject( TranslateService );   
  public el = inject( ElementRef );
  // @params
  isDropdownOpen = signal(false);
  addMenu = signal<NavMenu[]>([
    {
      txt:'menu.add-teacher',
      router:'add-teacher',
    },
    {
      txt:'menu.add-student',
      router:'add-student',
    },
    {
      txt:'menu.add-event',
      router:'add-event',
    },
    {
      txt:'menu.add-class',
      router:'add-class',
    },
    
  ])
  
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) { !this.isClickInsideComponent(event) ? this.isDropdownOpen.set(false) : undefined }

  isClickInsideComponent(event: MouseEvent): boolean {
    const mainContElement = this.el.nativeElement.querySelector('.container');
    return mainContElement.contains(event.target as Node);
  }
  
    
}
