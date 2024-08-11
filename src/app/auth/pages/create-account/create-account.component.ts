import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { asyncScheduler } from 'rxjs';

import { TranslatePipe } from '@shared/pipes/translate.pipe';

import { FormService } from '@services/form.service';
import { TranslateService } from '@services/translate.service';
import { UserService } from '../../services/user.service';


import { InputFieldComponent } from '@shared/components/input-field/input-field.component';
import { LoaderComponent } from '@shared/components/loader/loader.component';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [
    InputFieldComponent,
    ReactiveFormsModule,
    RouterModule,
    TranslatePipe,
    LoaderComponent,
  ],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export default class CreateAccountComponent {

  private _userService = inject( UserService );
  private _fb = inject( FormBuilder );
  
  public formService = inject( FormService );
  public router = inject( Router );
  public translateService = inject( TranslateService );

  isCompleted:boolean = false;
  isDisabled:boolean  = false;
  isSubmitted:boolean = false;
  isUserAlreadyExist:boolean = false;
  showLoader:boolean  = false;

  public myForm:FormGroup = this._fb.group({
    email             : ['nancy@hotmail.com', [Validators.required, Validators.pattern(this.formService.emailPattern)]],
    fullName          : ['Nancy Cristobal', [Validators.required, Validators.minLength(3)]],
    password          : ['Pass123?', [Validators.required, Validators.pattern(this.formService.passwordPattern)]],
    confirmPassword   : ['Pass123?', [Validators.required]],
  },{
    validators: [
      this.formService.equalFields('password','confirmPassword')
    ]
  });

  createUser() {

    this.showLoader  = true;
    this.isSubmitted = false;
    this.isUserAlreadyExist = false;
    
    const submit = () => {

      this.showLoader  = false;
      this.isSubmitted = true
      
      if(this.myForm.invalid) return; 
  
      const { email, fullName, password } = this.myForm.value;
  
      const userData = { email, fullName, password };
  
      this._userService.createUser( userData )
        .subscribe(  resp => {
          this.router.navigateByUrl('auth/success');
        }, (err) => {
          console.warn(err);
          this.isUserAlreadyExist = true;
        });
    };
    asyncScheduler.schedule( submit, 1000 );
  }
}
// TODO: implement new form to submit
// TODO: change success and error messages, i don´t like it