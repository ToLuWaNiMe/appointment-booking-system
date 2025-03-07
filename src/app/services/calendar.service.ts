import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
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

// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class CalendarService {
//   // constructor(private http: HttpClient) {}

//   getAvailability(month: string): Observable<string[]> {
//     const mockData = [
//       '2023-11-10T10:00:00.000Z',
//       '2023-11-10T11:00:00.000Z',
//       '2023-11-11T14:00:00.000Z',
//       '2023-11-11T15:00:00.000Z',
//     ];
//     return of(mockData);
//   }

//   bookAppointment(data: any): Observable<any> {
//     // Mock the appointment booking
//     return of({ message: 'Appointment booked successfully' });
//   }
// }
