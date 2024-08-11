import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { enviroment } from '../../../enviroments/enviroment';

@Injectable({providedIn: 'root'})
export class SubjectService {
    private http = inject( HttpClient );
    private baseUrl = enviroment.base_url;

    getAllsubjects() {
        return this.http.get(`${this.baseUrl}/subjects`);
    }
    
}