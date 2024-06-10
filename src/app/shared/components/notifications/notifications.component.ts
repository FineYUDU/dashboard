// @angular
import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
// @services
import { LocalStorageService } from '@services/localstorage.service';
import { TranslateService } from '@services/translate.service';
// @pipes
import { TranslatePipe } from '@shared/pipes/translate.pipe';

@Component({
  selector: 'notifications',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TranslatePipe,
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  // @injections
  public localStorageService = inject( LocalStorageService);
  public translateService = inject( TranslateService ); 
  

}
