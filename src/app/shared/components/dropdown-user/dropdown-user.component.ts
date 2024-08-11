import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { LocalStorageService } from '@services/localstorage.service';
import { TranslateService } from '@services/translate.service';

import { TranslatePipe } from '@shared/pipes/translate.pipe';
import { Router, RouterModule } from '@angular/router';
import { NavMenu } from '@shared/interfaces/nav.interfaces';
import { User } from '../../../auth/interfaces';
import { UserService } from '../../../auth/services/user.service';
import { MenusService } from '@services/menus.service';

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
  private _router = inject( Router );
  private _el = inject( ElementRef );
  private _userService = inject( UserService );

  public menusService = inject( MenusService );   
  public translateService = inject( TranslateService ); 

  public isDropdownOpen = signal<boolean>(false);
  public userProfilePic = signal<string>('../../../../assets/theme/profile-pic.svg');  


  get user():User | undefined {
    return this._userService.currenUser;
  }

  
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) { !this.isClickInsideComponent(event) ? this.isDropdownOpen.set(false) : undefined }

  isClickInsideComponent(event: MouseEvent): boolean {
    const mainContElement = this._el.nativeElement.querySelector('.container');
    return mainContElement.contains(event.target as Node);
  }

  logout() {
    this._userService.logout()
    this._router.navigateByUrl('auth');
  }

}

// TODO:Refacrtor