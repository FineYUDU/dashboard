import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { enviroment } from '../../../enviroments/enviroment';

import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { LoginForm, RegisterForm, User } from '../interfaces';

@Injectable({providedIn: 'root'})
export class UserService {
    private http = inject( HttpClient );
    private readonly baseUrl = enviroment.base_url;
    private user?: User;

    get currenUser():User | undefined {
        if( !this.user ) return undefined;
        return structuredClone( this.user );
    }

    login( formData:LoginForm ):Observable<User> {
        return this.http.post(`${this.baseUrl}/auth/login`,formData)
        .pipe(
            tap( (user:any) => localStorage.setItem('token', user.token)),
            tap( (user:any) => this.user = user ),
        );
    }

    createUser( formData:RegisterForm ) {
        return this.http.post(`${this.baseUrl}/auth/register`,formData);
    }

    checkAuthentication():Observable<boolean> {
      
        if ( !localStorage.getItem('token') ) return of(false);
  
        const token = localStorage.getItem('token');
  
        return this.http.get<User>(`${this.baseUrl}/auth/ce7ca4a6-1dfc-4681-8efe-66447eac948b`)
          .pipe(
            tap( (user:any) => this.user = user ),
            map( user => !!user ),
            catchError( err => of(false) )
          );
      }

    logout() {
        localStorage.removeItem('token');
    }

}