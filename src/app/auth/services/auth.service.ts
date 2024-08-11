import { HttpClient, HttpHeaders } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { enviroment } from '../../../enviroments/enviroment';
import { Observable, catchError, map , of, tap, throwError } from 'rxjs';
import { AuthStatus, CheckTokenResponse, LoginResponse, User } from '../interfaces';

@Injectable({providedIn: 'root'})
export class AuthService {

    private readonly _baseUrl = enviroment.base_url;

    private _http = inject( HttpClient );

    private _currentUser = signal<User|null>(null);
    private _authStatus = signal<AuthStatus>( AuthStatus.checking );

    // ! Al mundo exterior
    public currentUser = computed( ()=> this._currentUser() )
    public authStatus = computed( ()=> this._authStatus() )

    private setAuthentication(user:User, token:string):boolean {
        this._currentUser.set(user);
        this._authStatus.set(AuthStatus.authenticated);
        localStorage.setItem('token', token)

        return true;
    }

    login( email:string, password:string ): Observable<boolean> {

        const url = `${this._baseUrl}/auth/login`;
        const body =  { email, password }; 

        return this._http.post<LoginResponse>( url, body )
        .pipe(
            map( ({user, token})=> this.setAuthentication(user, token)),
            catchError( err => throwError( ()=> err.error.message ) )
        )
    }


    checkAuthStatus():Observable<boolean> {

        const url = this._baseUrl;
        const token = localStorage.getItem('token');

        if(!token) return of(false);

        const headers = new HttpHeaders()
            .set('Authorization', `Bearer ${token}`)
        
        return this._http.get<CheckTokenResponse>(url, { headers })
            .pipe(
                map( ({ user, token })=> this.setAuthentication( user, token )),
                // Error
                catchError(()=> {
                    this._authStatus.set( AuthStatus.notAuthenticated );
                    return of(false);
                }
            ))
        
    }
}