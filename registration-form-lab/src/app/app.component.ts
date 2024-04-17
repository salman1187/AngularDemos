import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IEmployee } from '../Models/employee';
import { EmployeeService } from '../Services/employee.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  @ViewChild('employeeForm') form!: NgForm
  employees:IEmployee[] = [];
  employee: IEmployee = {
    id: 0,
    name: '',
    email: '',
    organization: '',
    workshops: []
  };
  workshops: string[] = ['Angular Basics', 'Advanced TypeScript', 'React Fundamentals', 'Node.js Workshop', 'UI/UX Design']; // Dummy workshops
  isDirty: boolean = false; //checkboxes dirty ?
  successMessage: boolean = false;


  constructor(private employeeService: EmployeeService){}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    })
  }

  onSubmit() { 
    this.employee.id = this.employees.length + 1;
    this.employeeService.saveEmployee(this.employee).subscribe(response => {
      console.log('response: ', response);
      this.successMessage = true; // Show success message
      this.resetForm(); // Reset form after submission
      setTimeout(() => {
        this.successMessage = false;
      }, 3000);
    })
  }

  resetForm() {
    this.employee = {
      id: 0,
      name: '',
      email: '',
      organization: '',
      workshops: []
    };
    this.form.resetForm(); // Reset the form to initial state
    this.isDirty = false; // Reset dirty flag
  }

  toggleWorkshop(event: any, workshopName: string) {
    this.isDirty = true;
    const checked = event.target.checked;
    if (checked) {
      if (!this.employee.workshops.includes(workshopName)) {
        this.employee.workshops.push(workshopName);
      }
    } else {
      const index = this.employee.workshops.indexOf(workshopName);
      if (index !== -1) {
        this.employee.workshops.splice(index, 1);
      }
    }
  }  
}
