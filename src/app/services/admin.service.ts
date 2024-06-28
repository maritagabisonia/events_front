import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/events';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  Events: Event[] = [];
  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    console.log(1)
    return this.http.get<Event[]>("http://localhost:5123/api/Admin/event")
  }
  filterEvents(startDate: Date, endDate: Date): Observable<Event[]> {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };

    const formattedStartDate = this.formatDate(startDate);
    const formattedEndDate = this.formatDate(endDate);
    const url = `http://localhost:5123/api/Admin/filter-by-date?startDate=${encodeURIComponent(formattedStartDate)}&endDate=${encodeURIComponent(formattedEndDate)}`;

    return this.http.get<Event[]>(url, httpOptions);
  }
  deleteEvent(id: number): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http.delete<any>("http://localhost:5123/api/Admin/event/" + id, httpOptions);
  }

  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0];  // Format the date as 'YYYY-MM-DD'
  }
  get EventsList(): Event[] {
    return this.Events;
  }
  set EventsList(list: Event[]) {
    this.Events = list;
  }
}
