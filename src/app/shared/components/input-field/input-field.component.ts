// @angular
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input, forwardRef, inject } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
// @service
import { FormService } from '@services/form.service';
import { LocalStorageService } from '@services/localstorage.service';
import { TranslateService } from '@services/translate.service';
import { TranslatePipe } from '@shared/pipes/translate.pipe';

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
  // @inputs
  @Input() errorMessage?:string; 
  @Input() isRequired?:boolean; 
  @Input() iconEye:boolean = false;
  @Input() iconName:string= 'icon-email';
  @Input() inputType:string = 'text';
  @Input() isDisabled:boolean = false;
  @Input() isInvalidPassword?:boolean; 
  @Input() isSubmitted!:boolean; 
  @Input() legendName:string = '';
  @Input() maxLength:number = 100;
  @Input() minLength:number = 0;
  @Input() placeholder:string = '';
  @Input() showIcon:boolean = false;
  @Input() autocomplete:string = '';
  // @injections
  private onChangeCb?: Function;
  public formService = inject( FormService );
  public localStorageService = inject( LocalStorageService );
  public translateService = inject( TranslateService );
  // @params
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
