import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ICanDeactivate } from '../guards/secure.guards';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements ICanDeactivate {
  name: string = '';
  email: string = '';
  message: string = '';

  canLeave(): boolean {
    if(this.name.length > 0 || this.email.length > 0 || this.message.length > 0)
      return false;
    return true;
  }

}
