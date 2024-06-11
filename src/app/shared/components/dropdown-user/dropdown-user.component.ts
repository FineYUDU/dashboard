// @angular
import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
// @services
import { LocalStorageService } from '@services/localstorage.service';
import { TranslateService } from '@services/translate.service';
// @pipes
import { TranslatePipe } from '@shared/pipes/translate.pipe';
import { NavMenu } from '@models/index.interfaces';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'dropdown-user',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    TranslatePipe,
    RouterModule,
  ],
  templateUrl: './dropdown-user.component.html',
  styleUrl: './dropdown-user.component.css'
})
export class DropdownUserComponent {
  // @injections
  public el = inject( ElementRef );
  public localStorageService = inject( LocalStorageService );
  public router = inject( Router );
  public translateService = inject( TranslateService ); 
  // @params
  public isDropdownOpen = signal<boolean>(false);
  public userMenu = signal<NavMenu[]>([
    {
      txt:'menu.profile',
      router:'profile',
    },
    {
      txt:'menu.account',
      router:'account',
    },
    {
      txt:'menu.logout',
    },
    
  ]);
  
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) { !this.isClickInsideComponent(event) ? this.isDropdownOpen.set(false) : undefined }

  isClickInsideComponent(event: MouseEvent): boolean {
    const mainContElement = this.el.nativeElement.querySelector('.container');
    return mainContElement.contains(event.target as Node);
  }

  logout() {
    this.router.navigateByUrl('auth');
  }
}