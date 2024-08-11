import { Injectable } from '@angular/core';
@Injectable({providedIn: 'root'})

export class TranslateService {

    get GetLang(): string { 
        return localStorage.getItem('lang') === 'es' ? 'es' : 'en' 
    }

    changeLang() {
        const currentLang = localStorage.getItem('lang');
        let lang = currentLang === 'es' ? 'en' : 'es';
    
        localStorage.setItem('lang', lang);
    }

    toggleLang(lang:string){
        if (lang === 'es' || lang === 'en') localStorage.setItem('lang', lang);
    }
    
}