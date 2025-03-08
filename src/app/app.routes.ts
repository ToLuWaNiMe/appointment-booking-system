import { provideRouter, Routes } from '@angular/router';
import { UserBookingComponent } from './components/user-booking/user-booking.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
  { path: 'user-booking', component: UserBookingComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: '', redirectTo: '/user-booking', pathMatch: 'full' } // Default route
];
