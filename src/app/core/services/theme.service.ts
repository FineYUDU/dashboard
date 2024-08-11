import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  toggle:boolean;

  constructor() {
    let theme = localStorage.getItem('theme');
    if( theme === 'dark' ) this.toggle = true
    else this.toggle = false;
  }

  changeTheme(theme:string): void {
    theme = theme === 'light' ? 'light' : 'dark';

    document.body.classList.toggle('theme--dark', theme === 'dark');
    document.body.classList.toggle('theme--light',theme === 'light');

    localStorage.setItem('theme', theme);
  }

  toggleTheme(): void {
    this.toggle = !this.toggle;
    const theme = this.toggle ? 'dark' : 'light';
  
    localStorage.setItem('theme', theme);
  
    document.body.classList.toggle('theme--dark', this.toggle);
    document.body.classList.toggle('theme--light', !this.toggle);
  }

  get GetMode():string | null {
    let mode = localStorage.getItem('theme');
    return mode;
  }
  
}
