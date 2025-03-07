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

// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { Appointment } from '.././models/appointment.model';

// @Injectable({
//   providedIn: 'root',
// })
// export class AdminService {
//   // constructor(private http: HttpClient) {}

//   getAllAppointments(apiKey: string): Observable<Appointment[]> {
//     const mockData: Appointment[] = [
//       {
//         id: 1,
//         user_name: 'John Doe',
//         email: 'john.doe@example.com',
//         date_time: new Date('2023-11-10T10:00:00.000Z'),
//         status: 'pending',
//       },
//       {
//         id: 2,
//         user_name: 'Jane Smith',
//         email: 'jane.smith@example.com',
//         date_time: new Date('2023-11-11T14:00:00.000Z'),
//         status: 'confirmed',
//       },
//     ];
//     return of(mockData);
//   }
// }
