import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ValorationFormComponent } from '../valoration-form/valoration-form.component';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { JsonPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MAT_DATE_LOCALE, MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-admin-booking-form',
  standalone:true,
  imports:[MatSelectModule,
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
    ValorationFormComponent],
  templateUrl: './admin-booking-form.component.html',
  styleUrl: './admin-booking-form.component.css',
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-CO' },
    provideNativeDateAdapter()
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AdminBookingFormComponent {
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
