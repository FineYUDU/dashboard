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
  selector: 'app-login',
  standalone: true,
  imports: [
    InputFieldComponent,
    ReactiveFormsModule,
    RouterModule,
    TranslatePipe,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
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
    user      : ['', [Validators.required]],
    password  : ['', [Validators.required]],
  });

  onSubmit(){
    const form = this.myForm.controls; 
    this.isSubmitted = true

    if(this.myForm.valid) {
      console.log('Form Valid');
      if( form['user'].value == 'test@test.com' && form['password'].value == 'password') {
        // TODO: Esta logica cambiara cuando conecte al backend
          this.router.navigateByUrl('dashboard'); 
          this.isPassUserInvalid = false;
          console.log('Submit success');
          this.isSubmitted = false;
          this.myForm.reset();
      } else {
        this.isPassUserInvalid = true
        console.log(this.isPassUserInvalid);
        console.log('User or password is wrong');
      }
    } else console.log('Error login');
  }

}
