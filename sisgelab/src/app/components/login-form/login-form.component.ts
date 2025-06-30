import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule,FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule,CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  loginForm: FormGroup;

  constructor(private router: Router , private fb: FormBuilder){
    this.loginForm = this.fb.group({
      code: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  code: string = '';
  password: string = '';

  loginUser() {
    if (this.loginForm.valid) {
      const code = this.loginForm.get('code')?.value;
      const password = this.loginForm.get('password')?.value;

      console.log('Code:', code);
      console.log('Password:', password);

      this.router.navigate(['/home']);
      this.loginForm.reset(); // Limpia el formulario
      }
  }

}
