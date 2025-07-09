import { AdminBookingFormComponent } from './admin-booking-form.component'
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('AdminBookingFormComponent', () => {
  let component: AdminBookingFormComponent;
  let fixture: ComponentFixture<AdminBookingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBookingFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});