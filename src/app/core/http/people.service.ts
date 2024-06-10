import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { enviroment } from '../../../enviroments/enviroment';

export interface PeopleResp {
    id:number;
    name:string;
    birthdate:Date;
}

@Injectable({providedIn: 'root'})

export class PeopleService {

    private http = inject( HttpClient );
    apiUrl:string = enviroment.wsUrl;

    constructor() { 
        const url = 'api/People/all'
        this.http.get<PeopleResp>(`${this.apiUrl}${url}`)
        .subscribe( resp => console.log(resp))
    }
    
}