import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-register-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  
  constructor(private router: Router) {}

  name: string = '';
  code: string = '';
  password: string = '';
  

  registerUser() {
    console.log('Name:', this.name);
    console.log('Code:', this.code);
    console.log('Password:', this.password);

    Swal.fire({
      icon: 'success',
      title: '¡Registro exitoso!',
      text: 'El usuario fue registrado correctamente.',
      confirmButtonColor: '#3085d6',
      timer: 2500,
      showConfirmButton: false
    });
    


    this.name = '',
    this.code = '',
    this.password = ''

    // Logica para el Back
    setTimeout(() => {
      this.router.navigate(['/login']);  // ⬅️ Ajusta esta ruta según tu app
    }, 1500);
    
  }

}
