import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../../services/calendar.service';
import { BookingFormComponent } from '../booking-form/booking-form.component'; // Import BookingFormComponent
import { CommonModule } from '@angular/common';
//import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-booking',
  templateUrl: './user-booking.component.html',
  imports: [CommonModule, BookingFormComponent], // Add BookingFormComponent
  standalone: true, // Make it standalone
})
export class UserBookingComponent implements OnInit {
  currentDate: Date = new Date();
  weeks: Date[][] = [];
  availability: string[] = [];
  selectedSlot: Date | null = null;

  constructor(private calendarService: CalendarService) {}

  openBookingForm(slot: Date): void {
    this.selectedSlot = slot;
  }

  onBooked(): void {
    this.selectedSlot = null;
    this.loadAvailability(); // Refresh slots after booking
  }

  ngOnInit(): void {
    this.generateCalendar();
    this.loadAvailability();
  }

  refreshData(): void {
    this.loadAvailability();
  }

  // Generate the current month's calendar grid
  generateCalendar(): void {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days: Date[] = [];

    for (let day = firstDay; day <= lastDay; day.setDate(day.getDate() + 1)) {
      days.push(new Date(day));
    }

    // Split days into weeks (rows of 7 days)
    this.weeks = [];
    while (days.length > 0) {
      this.weeks.push(days.splice(0, 7));
    }
  }

  // Fetch available slots for the current month
  loadAvailability(): void {
    const dateStr = this.currentDate.toISOString().slice(0, 7); // "YYYY-MM"
    this.calendarService.getAvailability(dateStr).subscribe({
      next: (slots) => this.availability = slots,
      error: (err) => console.error('Failed to load slots:', err)
    });
  }

  prevMonth(): void {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() - 1,
      1
    );
    this.generateCalendar();
    this.loadAvailability();
  }

  nextMonth(): void {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      1
    );
    this.generateCalendar();
    this.loadAvailability();
  }

  // Filter slots for a specific day
  getSlotsForDay(day: Date): Date[] {
    const dayStr = day.toISOString().slice(0, 10);
    return this.availability
      .filter(slot => slot?.startsWith?.(dayStr))
      .map(slot => new Date(slot));
  }

}
