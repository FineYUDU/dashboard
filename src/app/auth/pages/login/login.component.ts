import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { asyncScheduler } from 'rxjs';

import { TranslatePipe } from '@shared/pipes/translate.pipe';

import { AuthService } from '../../services/auth.service';
import { FormService } from '@services/form.service';
import { ThemeService } from '@services/theme.service';
import { TranslateService } from '@services/translate.service';

import { InputFieldComponent } from '@shared/components/input-field/input-field.component';
import { LoaderComponent } from '@shared/components/loader/loader.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    InputFieldComponent,
    LoaderComponent,
    ReactiveFormsModule,
    RouterModule,
    TranslatePipe,
    NgOptimizedImage,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  
  private _authService = inject( AuthService );
  private _fb = inject( FormBuilder );
  
  public formService = inject( FormService );
  public themeService = inject( ThemeService );
  public router = inject( Router );
  public translateService = inject( TranslateService );
  
  isCompleted:boolean = false;
  isDisabled:boolean  = false;
  isErrorService:boolean = false;
  msnServiceError:string = '';
  isSubmitted:boolean = false;
  showLoader:boolean  = false;
  
  public myForm:FormGroup = this._fb.group({
    email     : [ localStorage.getItem('email') || 'fine_567@hotmail.com', [Validators.required]],
    password  : ['Password1234', [Validators.required]],
    remember   : [false]
  });

  loginOnSubmit(){

    this.showLoader = true;
    this.isErrorService = false;

    const submit = () => {

      this.isSubmitted = true;

      if(this.myForm.invalid) return;

      const { email, password } = this.myForm.value;

      this._authService.login( email, password )
      .subscribe({
        next: (success) => {

        this.showLoader = false;
    
          if( this.myForm.get('remember')?.value ) 
            localStorage.setItem('email', this.myForm.get('email')?.value)
          else 
            localStorage.removeItem('email');
    
          this.router.navigateByUrl('dashboard'); 
  
        },
        error: (error)=> {

          this.showLoader = false;
          this.isErrorService = true;
          
          if( error === undefined ) this.msnServiceError = 'msn-error.service'
          
          if( error === 'Credentials are not valid' ) this.msnServiceError = 'msn-error.userPassInvalid'
          
        }
      });
    }
    asyncScheduler.schedule( submit, 1000 );
  }

}

/**
 TODO: 
  1. redesign checkbox
  2. change error messages when email or pass is invalid, i don´t like it
 * 
*/
