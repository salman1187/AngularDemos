import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
    users: any[] = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        address: "123 Main Street, City, Country",
        organization: "XYZ Corp"
    },
    {
        id: 2,
        name: "Alice Smith",
        email: "alice@example.com",
        address: "456 Elm Street, Town, Country",
        organization: "ABC Corp"
    },
    {
        id: 3,
        name: "Bob Johnson",
        email: "bob@example.com",
        address: "789 Oak Street, Village, Country",
        organization: "DEF Corp"
    },
    {
        id: 4,
        name: "Emily Brown",
        email: "emily@example.com",
        address: "321 Maple Street, Hamlet, Country",
        organization: "GHI Corp"
    },
    {
        id: 5,
        name: "Michael Wilson",
        email: "michael@example.com",
        address: "654 Pine Street, Suburb, Country",
        organization: "JKL Corp"
    }
];

editUser(user: any){
    this.users.filter(u => u.id !== user.id);
}

}
