import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  code: string = '';
  password: string = '';

  loginUser() {
    console.log('Code:', this.code);
    console.log('Password:', this.password);
    
    this.code = '',
    this.password = ''
    // Logica para el Back
  }

}
