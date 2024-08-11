import { ActivationEnd, Router } from '@angular/router';
import { Component, Input, inject } from '@angular/core';

import { TranslateService } from '../../../core/services/translate.service';

import { TranslatePipe } from '@shared/pipes/translate.pipe';

import { filter, map } from 'rxjs';

@Component({
  selector: 'breadcrumb',
  standalone: true,
  template:`
    <p class="
        font__size--h5 
        font__weight--semibold 
        font__color--primary"
      >
      {{ title | translate:translateService.GetLang }} 
    </p>
  `,  
  imports: [
    TranslatePipe
  ],
})
export class BreadcrumbsComponent {
  @Input() DelayDefer:boolean = false;
  
  private router = inject( Router );
  public translateService = inject( TranslateService );
  
  public title: any;

  constructor() { this.getRouteData() }

  getRouteData() {
    this.router.events
    .pipe(
      filter( (event:any) => event instanceof ActivationEnd ),
      filter( (event:ActivationEnd) => event.snapshot.firstChild === null ),
      map( (event:ActivationEnd) => event.snapshot.data['translate'] ),
    )
    .subscribe( data=>{
      this.title = data;
    });
  }
}