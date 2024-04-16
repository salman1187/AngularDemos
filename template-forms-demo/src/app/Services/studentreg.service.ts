import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStudent } from '../Models/student';
import { apirUrl } from '../shared/apiurl';

@Injectable({
  providedIn: 'root'
})
export class StudentregService {

  constructor(private http: HttpClient) { }

  saveStudent(student: IStudent) {
    return this.http.post(`${apirUrl}/students`, student);
  }
  getStudents() {
    return this.http.get<IStudent[]>(`${apirUrl}/students`);
  }

}
