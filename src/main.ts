import { bootstrapApplication } from '@angular/platform-browser';
//import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient  } from '@angular/common/http';
import { CalendarService } from './app/services/calendar.service';
import { AdminService } from './app/services/admin.service';


bootstrapApplication(AppComponent, {
    providers: [
    provideHttpClient(),
    CalendarService,
    AdminService
    ]
  }).catch((err) => console.error(err));

