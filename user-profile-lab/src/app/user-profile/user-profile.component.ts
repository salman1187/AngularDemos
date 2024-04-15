import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, UserEditComponent, UserDetailComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  @Input()
  users: any[] = [];
  @Output()
  editedUser = new EventEmitter<any>();

  userEdited(user: any){
    this.editedUser.emit(user);
  }

}
