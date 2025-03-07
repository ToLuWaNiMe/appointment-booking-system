import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Appointment } from '../../models/appointment.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-admin-dashboard',
    imports: [CommonModule,FormsModule, HttpClientModule ],
    templateUrl: './admin-dashboard.component.html',
    standalone: true
})
export class AdminDashboardComponent implements OnInit {
  appointments: Appointment[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    const apiKey = environment.apiKey; // Replace with actual API key
    this.adminService.getAllAppointments(apiKey).subscribe({
      next: (data) => {
        this.appointments = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load appointments';
        this.isLoading = false;
      }
    });
  }

  filterDate: string | null = null;
  filterStatus: string | null = null;

  get filteredAppointments(): Appointment[] {
    return this.appointments.filter(appointment => {
      const matchesDate = this.filterDate
        ? appointment.date_time.toISOString().startsWith(this.filterDate)
        : true;
      const matchesStatus = this.filterStatus
        ? appointment.status === this.filterStatus
        : true;
      return matchesDate && matchesStatus;
    });
  }
}
