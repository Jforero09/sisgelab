import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { CommonModule } from '@angular/common';


export interface Booking {
  id: string;
  usuarioId: string;
  horaInicio: string;
  horaFinal: string;
  recursoId: string;
  nombreRecurso: string;
  estado: 'pendiente' | 'rechazada' | 'confirmada';
}

@Component({
  selector: 'app-admin-manager',
  standalone: true,
  imports: [AdminHeaderComponent, MatSelectModule, MatFormFieldModule, MatTabsModule,CommonModule],
  templateUrl: './admin-manager.component.html',
  styleUrl: './admin-manager.component.css'
})
export class AdminManagerComponent {
   bookings: Booking[] = [
    {
      id: '001',
      usuarioId: '20192020125',
      horaInicio: '10:00',
      horaFinal: '12:00',
      recursoId: '1234',
      nombreRecurso: 'Laboratorio de óptica',
      estado: 'pendiente'
    }]

  constructor() {}
deleteBooking(booking: Booking) {
  booking.estado = 'rechazada';
  this.reordenar();
}

acceptBooking(booking: Booking) {
  booking.estado = 'confirmada';
  this.reordenar();
}
  private reordenar() {
    // Mueve los rechazados al final
    this.bookings = this.bookings.sort((a, b) => {
      if (a.estado === 'rechazada' && b.estado !== 'rechazada') return 1;
      if (a.estado !== 'rechazada' && b.estado === 'rechazada') return -1;
      return 0;
    });
  }
}
