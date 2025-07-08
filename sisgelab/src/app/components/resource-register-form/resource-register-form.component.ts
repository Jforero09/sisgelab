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
    ValorationFormComponent
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

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      horaInicio: ['', Validators.required],
      horaFin: ['', Validators.required],
      fecha: [null, Validators.required]
      // agrega más campos aquí si es necesario
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.warn('Formulario inválido');
    }
  }
}
