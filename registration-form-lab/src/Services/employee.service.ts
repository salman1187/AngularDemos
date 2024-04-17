import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from '../Models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  getEmployees(){
    return this.http.get<IEmployee[]>(`${this.apiUrl}/employees`);
  }
  saveEmployee(emp: IEmployee) {
    return this.http.post(`${this.apiUrl}/employees`, emp);
  }

}
