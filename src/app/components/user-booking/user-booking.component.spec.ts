import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserBookingComponent } from './user-booking.component';
import { CalendarService } from '../../services/calendar.service';

describe('UserBookingComponent', () => { // Updated describe block
  let component: UserBookingComponent; // Updated variable type
  let fixture: ComponentFixture<UserBookingComponent>; // Updated fixture type

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserBookingComponent],
      providers: [CalendarService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBookingComponent); // Updated component reference
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should generate calendar weeks', () => {
    component.currentDate = new Date('2024-05-01');
    component.generateCalendar();
    expect(component.weeks.length).toBeGreaterThan(0);
  });
});
