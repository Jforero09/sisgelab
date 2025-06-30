import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule,FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-register-form',
  imports: [FormsModule,CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

  registerForm: FormGroup;
  
  constructor(private router: Router , private fb: FormBuilder){
    
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  

  registerUser() {

    if (this.registerForm.valid) {
    const name = this.registerForm.get('name')?.value;  
    const code = this.registerForm.get('code')?.value;
    const password = this.registerForm.get('password')?.value;

    console.log('Code:', name);
    console.log('Code:', code);
    console.log('Password:', password);

    this.router.navigate(['/login']);
    this.registerForm.reset(); // Limpia el formulario
    }
   
    Swal.fire({
      icon: 'success',
      title: '¡Registro exitoso!',
      text: 'El usuario fue registrado correctamente.',
      confirmButtonColor: '#3085d6',
      timer: 2500,
      showConfirmButton: false
    });
    // Logica para el Back
    setTimeout(() => {
      this.router.navigate(['/login']); 
    }, 1500);
    
  }

}
