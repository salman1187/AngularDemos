import { Inject, inject } from "@angular/core";
import { ContactComponent } from "../contact/contact.component";

export const CanActivate = () => {
    return true;
}

export interface ICanDeactivate {
    canLeave():boolean;
}

export function CanDeactive(component: ICanDeactivate){
    if(!component.canLeave()){
        return confirm("Do you really want to leave the contact form ?");
    }
    return true;
}

export function CanDeactivateContactForm(form: ContactComponent) {
    if(form.email.length > 0 || form.name.length > 0 || form.message.length > 0)
    {
        return confirm("Do you really want to leave the contact form ?");
    }
    return true;
}