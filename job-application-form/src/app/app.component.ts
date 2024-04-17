import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IApplicant } from '../Models/applicant';
import { ApplicantService } from '../Services/applicant.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  @ViewChild('applicantForm') form!:NgForm
  applicants:IApplicant[] = [];
  applicant: IApplicant = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    skills: '',
    desiredPosition: ''
  };
  successMessage: boolean = false;

  constructor(private applicantService: ApplicantService){}

  ngOnInit(): void {
    this.applicantService.getApplicants().subscribe((data) => {
      this.applicants = data;
    })
  }

  onSubmit() { 
    this.applicant.id = this.applicants.length + 1;
    this.applicantService.saveApplicant(this.applicant).subscribe(response => {
      console.log('response: ', response);
      this.successMessage = true; // Show success message
      this.resetForm(); // Reset form after submission
      setTimeout(() => {
        this.successMessage = false;
      }, 3000);
    })
  }

  resetForm() {
    this.applicant = {
      id: 0,
      name: '',
      email: '',
      phone: '',
      skills: '',
      desiredPosition: ''
    };
    this.form.resetForm(); // Reset the form to initial state
  }

}
