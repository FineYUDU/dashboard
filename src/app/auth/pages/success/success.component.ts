import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TranslatePipe } from '@shared/pipes/translate.pipe';

import { TranslateService } from '@services/translate.service';


@Component({
  selector: 'app-success',
  standalone: true,
  imports: [
    TranslatePipe,
    RouterModule,
  ],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export default class SuccessComponent {
  public translateService = inject( TranslateService );
}
