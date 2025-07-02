import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ValorationFormComponent } from '../valoration-form/valoration-form.component';

@Component({
  selector: 'app-booked-resources-table',
  imports: [HeaderComponent,
    MatSelectModule,MatFormFieldModule,MatTabsModule],
  templateUrl: './booked-resources-table.component.html',
  styleUrl: './booked-resources-table.component.css'
})
export class BookedResourcesTableComponent {

}



