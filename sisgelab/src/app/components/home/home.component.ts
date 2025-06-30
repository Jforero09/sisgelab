import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-home',
  imports: [HeaderComponent,FooterComponent,
    MatSelectModule,MatFormFieldModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
