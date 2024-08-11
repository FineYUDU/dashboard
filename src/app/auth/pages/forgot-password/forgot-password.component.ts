import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { TranslatePipe } from '@shared/pipes/translate.pipe';

import { FormService } from '@services/form.service';
import { LocalStorageService } from '@services/localstorage.service';
import { TranslateService } from '@services/translate.service';

import { InputFieldComponent } from '@shared/components/input-field/input-field.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    InputFieldComponent,
    ReactiveFormsModule,
    RouterModule,
    TranslatePipe,
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export default class ForgotPasswordComponent {

 private _fb = inject( FormBuilder );

 public formService = inject( FormService );
 public localStorageService = inject( LocalStorageService);
 public router = inject( Router );
 public translateService = inject( TranslateService );

 isCompleted:boolean = false;
 isDisabled:boolean  = false;
 isPassUserInvalid:boolean = false;
 isSubmitted:boolean = false;
 showLoader:boolean  = false;

 public myForm:FormGroup = this._fb.group({
   user      : ['', [Validators.required]],
 });

 forgotPassword(){
   const form = this.myForm.controls; 
   this.isSubmitted = true

   if(this.myForm.valid) {
   } else console.log('Error login');
 }

}
