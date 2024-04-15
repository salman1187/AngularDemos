import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent {
  @Input()
  user: any;
  @Output()
  editedUser = new EventEmitter<any>();

  saveChanges(){
    this.editedUser.emit(this.user);
  }

}
