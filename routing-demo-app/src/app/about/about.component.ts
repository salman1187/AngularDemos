import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TeamsComponent } from '../teams/teams.component';
import { ServicesComponent } from '../services/services.component';
import { CompanyComponent } from '../company/company.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, RouterOutlet, TeamsComponent, ServicesComponent, CompanyComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
