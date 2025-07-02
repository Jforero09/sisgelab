import { Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { HomeComponent } from './components/home/home.component';
import { BookedResourcesTableComponent } from './components/booked-resources-table/booked-resources-table.component';
import { ValorationFormComponent } from './components/valoration-form/valoration-form.component';

export const routes: Routes = [

    {
        path:'',
        component:LoginFormComponent,
    },{
        path:'register',
        component:RegisterFormComponent
    },{
        path:'login',
        component:LoginFormComponent
    },{
        path:'home',
        component:HomeComponent  
    },{
        path:'booked_resoruces',
        component:BookedResourcesTableComponent
    },{
        path:'valorations',
        component:ValorationFormComponent
    }


];
