import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; //form group and form control
import { RouterOutlet } from '@angular/router';
import { mobileValidator } from './custom-validators/custom.validators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  studentForm = this.formbuilder.group({
    rollno: (['', Validators.required]),
    name: (['', Validators.required]),
    email: (['', [Validators.required, Validators.email]]), 
    mobile: (['', [Validators.required, mobileValidator]]),
    gender: (['', Validators.required]),
    subscribe: ([false]),
    skills: this.formbuilder.array([''])
  });
  rollNoErrorMsg: string = '';
  mobileErrorMsg: string = '';
  constructor(private formbuilder: FormBuilder) {}
  ngOnInit(): void {
    this.validateName();
    this.validateMobile();
    this.validateEmail();
   
  }
  validateName() {
    this.studentForm.get('rollno')?.valueChanges.subscribe(rn => {
      console.log(this.studentForm.get('rollno'));
      if(this.studentForm.get('rollno')?.invalid && this.studentForm.get('rollno')?.touched){
        this.rollNoErrorMsg = 'enter rollno'
      } else {
        this.rollNoErrorMsg = '';
      }
    });
  }
  validateMobile() {
    this.studentForm.get('mobile')?.valueChanges.subscribe(m => {
      console.log(this.studentForm.get('mobile'));
    })
  }
  validateEmail() {
    this.studentForm.get('subscribe')?.valueChanges.subscribe(check => {
      if(check){
        this.studentForm.get('email')?.addValidators(Validators.required);
        this.studentForm.get('email')?.updateValueAndValidity();
      } else {
        this.studentForm.get('email')?.removeValidators(Validators.required);
        this.studentForm.get('email')?.updateValueAndValidity();
      }
    });
  }

  onSubmit() {
    if(this.studentForm.valid)
      {
        console.log(this.studentForm.value);
      }
      else{
        console.log("invalid form");
      }     
  }

  get Skills() {
    return this.studentForm.get('skills') as FormArray;
  }
  deleteSkill(index:number) {
    this.Skills.removeAt(index);
  }
  addSkill(): void {
    this.Skills.push(new FormControl());
  }
}
  
// studentForm = new FormGroup({
  //   rollno: new FormControl(),
  //   name: new FormControl(),
  //   email: new FormControl(), 
  //   mobile: new FormControl(),
  //   gender: new FormControl()
  // });