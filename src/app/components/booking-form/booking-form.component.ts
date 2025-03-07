import { Component, EventEmitter, Input, Output, Inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
//import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-booking-form', // Make it standalone
    imports: [ReactiveFormsModule, CommonModule], // Add imports
    providers: [FormBuilder],
    templateUrl: './booking-form.component.html',
    standalone: true
})
export class BookingFormComponent {
  @Input() selectedSlot!: Date; // Change to Date
  @Output() booked = new EventEmitter<void>();

  bookingForm = this.fb.group({
    userName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(@Inject(FormBuilder) private fb: FormBuilder) {}

  onSubmit(): void {
    if (this.bookingForm.valid) {
      const appointment = {
        ...this.bookingForm.value,
        date_time: this.selectedSlot,
      };
      // Emit to parent component (User-BookingComponent)
      this.booked.emit();
    }
  }
}
