// @angular
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
// @services
import { FormService } from '@services/form.service';
import { LocalStorageService } from '@services/localstorage.service';
import { TranslateService } from '@services/translate.service';
// @pipes
import { TranslatePipe } from '@shared/pipes/translate.pipe';
// @components
import { InputFieldComponent } from '@shared/components/input-field/input-field.component';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [
    InputFieldComponent,
    ReactiveFormsModule,
    RouterModule,
    TranslatePipe,
  ],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export default class CreateAccountComponent {
  // @injections
  public fb = inject( FormBuilder );
  public formService = inject( FormService );
  public localStorageService = inject( LocalStorageService);
  public router = inject( Router );
  public translateService = inject( TranslateService );
  // @params
  isCompleted:boolean = false;
  isDisabled:boolean  = false;
  isPassUserInvalid:boolean = false;
  isSubmitted:boolean = false;
  showLoader:boolean  = false;

  public myForm:FormGroup = this.fb.group({
    email             : ['', [Validators.required]],
    username          : ['', [Validators.required]],
    password          : ['', [Validators.required]],
    confirmPassword   : ['', [Validators.required]],
  });

  onSubmit(){
    const form = this.myForm.controls; 
    this.isSubmitted = true

    if(this.myForm.valid) {
      console.log('Form Valid');
    } else console.log('Error login');
  }
  
}
