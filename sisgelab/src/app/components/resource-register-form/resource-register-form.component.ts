import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {  MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { JsonPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ValorationFormComponent } from '../valoration-form/valoration-form.component'; // ajústalo si la ruta varía
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resource-register-form',
  standalone: true,
  imports: [
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    JsonPipe,
    NgxMatTimepickerModule,
    ValorationFormComponent,
    HttpClientModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-CO' },
    provideNativeDateAdapter()
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './resource-register-form.component.html',
  styleUrls: ['./resource-register-form.component.css']
})
export class ResourceRegisterFormComponent {
  private idRecursoCounter: number = 3;
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      tipoRecurso: [''],
      nombreRecurso: [''],
      ubicacionRecurso: [''],
      horaInicioDisponibilidad: ['', Validators.required],
      horaFinDisponibilidad: ['', Validators.required]
      // agrega más campos aquí si es necesario
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const recurso = { ...this.form.value };

      recurso.idRecurso = this.idRecursoCounter;

      this.idRecursoCounter++;

      recurso.horaInicioDisponibilidad = this.convertTo24HourFormat(recurso.horaInicioDisponibilidad);
      recurso.horaFinDisponibilidad = this.convertTo24HourFormat(recurso.horaFinDisponibilidad);

      console.log('Recurso a registrar:', recurso);

      const url: string = 'http://localhost:3000/recursos';  
      this.http.post(url, recurso).subscribe({
        next: (res) => {
          console.log('Recurso registrado:', res);
          alert('Recurso creado exitosamente');
          this.form.reset(); 
        },
        error: (err) => {
          console.error('Error al registrar recurso:', err);
          alert('Hubo un error al registrar el recurso');
        }
      });
    } else {
      console.warn('Formulario inválido');
    }
  }

  private convertTo24HourFormat(time: string): string {
    const [hours, minutes, period] = time.split(/[:\s]/);  

    let hours24 = parseInt(hours, 10);
    const minutes24 = parseInt(minutes, 10);

    if (period === "AM" && hours24 === 12) {
      hours24 = 0;
    } else if (period === "PM" && hours24 !== 12) {
      hours24 += 12; 
    }

    const hoursFormatted = hours24.toString().padStart(2, '0');
    const minutesFormatted = minutes24.toString().padStart(2, '0');

    return `${hoursFormatted}:${minutesFormatted}`;
  }
}
