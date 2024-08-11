import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { asyncScheduler } from 'rxjs';

import { TranslatePipe } from '@shared/pipes/translate.pipe';

import { AuthService } from '../../services/auth.service';
import { FormService } from '@services/form.service';
import { LocalStorageService } from '@services/localstorage.service';
import { TranslateService } from '@services/translate.service';

import { InputFieldComponent } from '@shared/components/input-field/input-field.component';
import { LoaderComponent } from '@shared/components/loader/loader.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputFieldComponent,
    LoaderComponent,
    ReactiveFormsModule,
    RouterModule,
    TranslatePipe,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  
  private _authService = inject( AuthService );
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
    email     : [ localStorage.getItem('email') || 'fine_567@hotmail.com', [Validators.required]],
    password  : ['Password123', [Validators.required]],
    remember   : [false]
  });

  onSubmit(){
    
    const { email, password } = this.myForm.value;

    this._authService.login( email, password )
    .subscribe({
      next: (success) => {
        console.log(success, "AuthResponse");

        if( this.myForm.get('remember')?.value ) 
          localStorage.setItem('email', this.myForm.get('email')?.value)
        else 
          localStorage.removeItem('email');
  
        this.router.navigateByUrl('dashboard'); 

      },
      error: (error)=> console.log({loginError: error}),
    })

  }


  // onSubmit(){

  //   this.showLoader = true;
  //   this.isPassUserInvalid = false;
    
  //   const submit = () => {
      
  //     this.showLoader = false;
  //     this.isSubmitted = true;

  //     if(this.myForm.invalid) return;
      
  //     const { email, password } = this.myForm.value;
  
  //     const userData = { email, password }; 
  
  //     this._authService.login(userData)
  //     .subscribe( success => {

  //       console.log(success, "AuthResponse");
  
  //       if( this.myForm.get('remember')?.value ) 
  //         localStorage.setItem('email', this.myForm.get('email')?.value)
  //       else 
  //         localStorage.removeItem('email');
  
  //       this.router.navigateByUrl('dashboard'); 
  //     }, (err) => {
  //       this.isPassUserInvalid = true;
  //     });
  //   };
  //   asyncScheduler.schedule( submit, 1000 );

  // }
}

/**
 TODO: 
  1. redesign checkbox
  2. change error messages when email or pass is invalid, i don´t like it
  3. implements loading
 * 
*/
