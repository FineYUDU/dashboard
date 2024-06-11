// @angular
import { Component, inject } from '@angular/core';
import { LocalStorageService } from '@services/localstorage.service';
import { NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@services/translate.service';
// @services
import { WebsocketService } from '@services/websocket.service';
// @pipes
import { TranslatePipe } from '@shared/pipes/translate.pipe';
// @components
import { BreadcrumbsComponent } from '@shared/components/breadcrumbs/breadcrumb.component';
import { DropdownTranslateComponent } from '@shared/components/dropdown-translate/dropdown-translate.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    BreadcrumbsComponent,
    DropdownTranslateComponent,
    NgOptimizedImage,
    RouterModule,
    TranslatePipe,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export default class AuthComponent {
  // @injections
  public localStorageService = inject( LocalStorageService);
  public translateService = inject( TranslateService );

}
