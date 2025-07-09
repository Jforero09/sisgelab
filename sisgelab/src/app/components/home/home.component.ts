import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  reservaForm: FormGroup;

  recursos: any = [];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.reservaForm = this.fb.group({
      tipoRecurso: [''],
      nombreRecurso: [''],
      idUsuario: '',
    });

    this.reservaForm.get('tipoRecurso')?.valueChanges.subscribe(valor => {
      this.cargarRecursos(valor);
    });
  }

  cargarRecursos(tipo: string) {
    const url: string = 'http://localhost:3000/recursos';
    const params = { tipo : tipo };
    this.http.get<any[]>(url, { params }).subscribe({
  next: (res) => {
    this.recursos = [];
    if (!res || res.length === 0) {
      console.warn('No se encontraron recursos para el tipo seleccionado');
      return;
    }
    for (let recurso of res) {
      this.recursos.push(
        {
          nombre: recurso.nombreRecurso,
          id: recurso.idRecurso
    });
    }
  },
  error: (err) => {
    console.error('Error al obtener recursos', err);
    this.recursos = [];
  }
});


  }


  onSubmit() {
    const fechaReserva = new Date();;
    const reservaData = {
      recurso: this.reservaForm.value.nombreRecurso,
      fechaSolicitud: fechaReserva.toISOString().split('T')[0],
      usuario: this.reservaForm.value.idUsuario,
    }
    console.log(reservaData);
    this.generarSolicitud(reservaData);
  }

  generarSolicitud(reservaData: any) {
    const url: string = 'http://localhost:3000/solicitudes';
    this.http.post(url, reservaData).subscribe({
      next: (res) => {
        console.log('Reserva creada exitosamente', res);
        alert('Reserva creada exitosamente');
        this.reservaForm.reset();
      },
      error: (err) => {
        console.error('Error al crear la reserva', err);
        alert(err.error.message);
      }
    });
  }

}
