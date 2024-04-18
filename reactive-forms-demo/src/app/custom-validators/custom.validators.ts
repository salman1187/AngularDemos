import { AbstractControl } from "@angular/forms";

export function mobileValidator(control: AbstractControl): {[key:string]: any}|null {
    const data:string = control.value;
    if(data.charAt(0) != '9'){
        return  {'invalidMobileNumber': {value: control.value}};
    }
    
    return null;
}