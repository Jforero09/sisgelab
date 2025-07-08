import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { ResourceRegisterFormComponent } from '../resource-register-form/resource-register-form.component';
import { AdminBookingFormComponent } from '../admin-booking-form/admin-booking-form.component';

@Component({
  selector: 'app-admin-resoruces-register',
  imports: [MatSelectModule,MatFormFieldModule,MatTabsModule,ResourceRegisterFormComponent,
    AdminBookingFormComponent],
  templateUrl: './admin-resoruces-register.component.html',
  styleUrl: './admin-resoruces-register.component.css'
})
export class AdminResorucesRegisterComponent {
  



}
