import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IApplicant } from '../Models/applicant';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {
  private apiUrl = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  getApplicants(){
    return this.http.get<IApplicant[]>(`${this.apiUrl}/applicants`);
  }
  saveApplicant(applicant: IApplicant) {
    return this.http.post(`${this.apiUrl}/applicants`, applicant);
  }

}
