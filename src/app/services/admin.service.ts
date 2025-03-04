import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '.././models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:3000/appointments'; // Update in production

  constructor(private http: HttpClient) {}

  getAllAppointments(apiKey: string): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiUrl}?apiKey=${apiKey}`);
  }
}
