import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private apiUrl = 'http://localhost:3000/appointments'; // Update in production

  constructor(private http: HttpClient) {}

  getAvailability(month: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/availability?date=${month}`);
  }

  bookAppointment(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
