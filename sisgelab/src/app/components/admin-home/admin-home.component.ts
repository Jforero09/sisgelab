import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { AdminResorucesRegisterComponent } from '../admin-resoruces-register/admin-resoruces-register.component';

@Component({
  selector: 'app-admin-home',
  imports: [AdminHeaderComponent,AdminResorucesRegisterComponent],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {

}
