// @angular
import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
// @services
import { LocalStorageService } from '@services/localstorage.service';
import { TranslateService } from '@services/translate.service';
// @pipes
import { TranslatePipe } from '@shared/pipes/translate.pipe';
import { NavMenu } from '@models/index.interfaces';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'user',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    TranslatePipe,
    RouterModule,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @injections
  public localStorageService = inject( LocalStorageService );
  public translateService = inject( TranslateService ); 
  public el = inject( ElementRef );
  public router = inject( Router );
  // @params
  isDropdownOpen:boolean = true;
  
  userMenu:NavMenu[] = [
    {
      txt:'menu.profile',
      router:'profile',
    },
    {
      txt:'menu.account',
      router:'account',
    },
    
  ]
  
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) { !this.isClickInsideComponent(event) ? this.isDropdownOpen = false : undefined }

  isClickInsideComponent(event: MouseEvent): boolean {
    const mainContElement = this.el.nativeElement.querySelector('.container');
    return mainContElement.contains(event.target as Node);
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  
  logout() {
    this.router.navigateByUrl('auth');
  }
}
