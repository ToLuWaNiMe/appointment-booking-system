import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserBookingComponent } from './user-booking.component';

describe('UserBookingComponent', () => { // Updated describe block
  let component: UserBookingComponent; // Updated variable type
  let fixture: ComponentFixture<UserBookingComponent>; // Updated fixture type

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBookingComponent] // Updated component reference
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBookingComponent); // Updated component reference
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
