import { CommonModule, JsonPipe, NgFor } from '@angular/common';
import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { IStudent } from '../Models/student';
import { StudentregService } from '../Services/studentreg.service';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [FormsModule, JsonPipe, CommonModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent implements OnInit {
  @ViewChild('emailInput') emailInput!: NgModel;
  students:IStudent[] = [];
  student:IStudent = {
    id: 0, 
    name: '',
    email: '',
    mobile: '',
    gender: '',
    subscribe: false,
    course: '',
    dob: ''
  }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((data) => {
      this.students = data;
    })
    console.log(this.emailInput);
  }

  constructor(private studentService: StudentregService) {}

  onSubmit() {
    this.student.id = this.students.length;
    this.studentService.saveStudent(this.student).subscribe(response => {
      console.log("response: ", response);
    });
  }
}
