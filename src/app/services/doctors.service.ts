import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  public Doctors: Doctor[] = [];

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>("http://localhost:5123/api/Authentication/GetDoctors")
  }

  get DoctorsList(): Doctor[] {
    return this.Doctors;
  }
  set DoctorsList(list: Doctor[]) {
    this.Doctors = list;
  }
}
