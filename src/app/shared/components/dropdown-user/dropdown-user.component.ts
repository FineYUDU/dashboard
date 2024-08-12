import { Component, computed, ElementRef, HostListener, inject, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { TranslatePipe } from '@shared/pipes/translate.pipe';

import { AuthService } from '../../../auth/services/auth.service';
import { MenusService } from '@services/menus.service';
import { TranslateService } from '@services/translate.service';

import { RouterModule } from '@angular/router';

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
  private _el = inject( ElementRef );
  private _authService = inject( AuthService );

  public menusService = inject( MenusService );   
  public translateService = inject( TranslateService ); 

  public isDropdownOpen = signal<boolean>(false);
  public userProfilePic = signal<string>('../../../../assets/theme/profile-pic.svg');  

  public user = computed( () => this._authService.currentUser() )


  
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) { !this.isClickInsideComponent(event) ? this.isDropdownOpen.set(false) : undefined }

  isClickInsideComponent(event: MouseEvent): boolean {
    const mainContElement = this._el.nativeElement.querySelector('.container');
    return mainContElement.contains(event.target as Node);
  }

  logout() {
    this._authService.logout()
  }

}

// TODO:Refacrtor