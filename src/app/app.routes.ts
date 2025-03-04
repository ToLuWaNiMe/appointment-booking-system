import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserBookingComponent } from './user-booking/user-booking.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
  { path: 'user-booking', component: UserBookingComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: '', redirectTo: '/user-booking', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes { }
