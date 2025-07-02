import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-valoration-form',
  imports: [HeaderComponent,MatInputModule,MatSelectModule,MatFormFieldModule,FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './valoration-form.component.html',
  styleUrl: './valoration-form.component.css'
})
export class ValorationFormComponent {
  constructor (private router: Router){
  }
}

