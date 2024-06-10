// * Angular
import { FormGroup, ValidationErrors } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class FormService {
    // * @Params
    emailPattern:string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    
    constructor() {}

	public isInvalidField(formGroup:FormGroup, field?:string, formSubmit?:boolean):boolean {
        if(!field) return false;

        if(!formGroup.get(field)) return false;

        if ( formGroup.get(field)?.invalid && formSubmit ) return true;

        return false;

    }

	errorMessage(formGroup:FormGroup, field:string):any {
        if(!field) return '';
        // @params
        const formControl = formGroup.get(field);

        if(!formControl) return '';

		if(formControl.getError('required')) return 'msn-error.required';

        if (formControl.getError('pattern')) return 'msn-error.pattern';
        
	}

}