// * Angular
import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../../core/services/translate.service';
/* 
note: 
    instal npm install typings -g --save-dev
    npm install @types/node --save-dev
    in tsconfig.app.json add the next line in "compilerOptions"
    "compilerOptions":{
        "types": [ "node" ],
    }
  },
*/

@Pipe({
    name: 'translate',
    standalone:true
})

export class TranslatePipe implements PipeTransform {


  constructor( private translateService : TranslateService ) {}

    
  transform(translateKey: string, lang: string): string {

    if (!translateKey) {
      // Return a default value or handle the error gracefully
      return '';
    }

    const currentLang = lang || localStorage.getItem('lang') || 'es';

    try {
      const translations = require(`../../../assets/lang/${currentLang}.json`);

      const keys = translateKey.split('.');

      let translation = translations;
      for (const key of keys) {
          if (translation.hasOwnProperty(key)) {
              translation = translation[key];
          } else {
              translation = translateKey;
              break;
          }
      }

      return translation;

      } catch (error) {
        console.error('Error loading translations:', error);
        // Return the key itself if translation fails
        return translateKey;
      }
    }
}