import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Login } from '../models/logIn';

@Injectable({
  providedIn: 'root'
})
export class Authentification {

  constructor(private http: HttpClient) { }
  currentDateTime = new Date();




  sendVerificationCode(email: string): Observable<any> {
    console.log("sendVerificationCode was called")
    console.log(email)


    let httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };

    return this.http.post<any>(`http://localhost:5123/api/Authentication/emailVerificationCode?email=${encodeURIComponent(email)}`, httpOptions);

  }
  addUser(user: User): Observable<any> {
    console.log("sendVerificationCode was called")
    console.log(user)


    let httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };

    return this.http.post<any>(`http://localhost:5123/api/Authentication`, user, httpOptions);

  }

  CheckemailVerificationCode(email: string, otp: string): Observable<any> {
    console.log("sendVerificationCode was called")
    console.log(email, otp)


    let httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };

    return this.http.post<any>(`http://localhost:5123/api/Authentication/CheckemailVerificationCode?email=${encodeURIComponent(email)}&otp=${encodeURIComponent(otp)}`, httpOptions);

  }

  login(login: Login): Observable<any> {
    console.log("login was called")
    console.log(login)


    let httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };

    return this.http.post<any>(`http://localhost:5123/api/Authentication/Login`, login, httpOptions);

  }

  login2Fa(email: string, otp: string): Observable<any> {
    console.log("login was called")
    console.log(email, otp)
    const formattedDateTime = this.formatDateTime(this.currentDateTime)
    console.log(formattedDateTime)

    let httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };

    return this.http.post<any>(`http://localhost:5123/api/Authentication/Login-2Fa?email=${encodeURIComponent(email)}&otp=${encodeURIComponent(otp)}`, null, httpOptions);

  }
  private formatDateTime(dateTime: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false // 24-hour format
    }
    return dateTime.toLocaleString('en-US', options);
  };

}
