// @angular
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
// @rxjs
import { Observable, map, tap } from 'rxjs';

export interface SingleUserResponse {
    data:    User;
    support: Support;
}

export interface User {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

export interface Support {
    url:  string;
    text: string;
}

export interface PaginatedUsers {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
}

@Injectable({providedIn: 'root'})
export class UserService {

    private http = inject( HttpClient );
    private baseUrl = 'https://reqres.in/api/users';

    loadPage(page:number):Observable<User[]>{
        return this.http.get<PaginatedUsers>(this.baseUrl, { params: { page } })
            .pipe( 
                map(  resp => resp.data)
            )
    }

    getusersById(id:number):Observable<User>{

        return this.http.get<SingleUserResponse>(`${this.baseUrl}/${id}`)
        .pipe(
            map( resp => resp.data),
            tap( console.log )
        );
    }
    
}