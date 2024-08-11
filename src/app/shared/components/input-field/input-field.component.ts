import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input, forwardRef, inject } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { TranslatePipe } from '@shared/pipes/translate.pipe';

import { FormService } from '@services/form.service';
import { ThemeService } from '@services/theme.service';
import { TranslateService } from '@services/translate.service';


@Component({
  selector: 'input-field',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    TranslatePipe,
  ],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting:forwardRef(() => InputFieldComponent),
      multi:true
    }
  ]
})
export class InputFieldComponent implements ControlValueAccessor {
  @Input() autocomplete:string = '';
  @Input() errorMessage?:string; 
  @Input() iconEye:boolean = false;
  @Input() iconName:string= 'icon-email';
  @Input() inputType:string = 'text';
  @Input() isDisabled:boolean = false;
  @Input() isInvalidPassword?:boolean; 
  @Input() isRequired?:boolean; 
  @Input() isSubmitted!:boolean; 
  @Input() legendName:string = '';
  @Input() maxLength:number = 100;
  @Input() minLength:number = 0;
  @Input() placeholder:string = '';
  @Input() showIcon:boolean = false;
 
  private onChangeCb?: Function;
  
  public formService = inject( FormService );
  public themeService = inject( ThemeService );
  public translateService = inject( TranslateService );
  
  fieldValue:any = '';
  onTouchCb?: () => void;

  changeTypePassword():string {
    if(this.inputType === 'text') {
    return this.inputType = 'password';
    } else {
    return this.inputType = 'text';
    }
  }
  changeText($event: any) {
    this.onChangeCb?.($event.target.value);
  }
  writeValue(value: any): void {
    this.fieldValue = value;
  }
  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }
  registerOnTouched(fn: any): void {
    fn = this.onTouchCb;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled = this.isDisabled;
  }
}
