import { Routes } from '@angular/router';
import { GeneralComponent } from '../features/forms/static/pages/general/general.component';
import { PatientsPageComponent } from '../features/patients/pages/patients-page/patients-page.component';

export const routes: Routes = [
  {
    path: '',
    component: PatientsPageComponent
  },
  {
    path: 'medical-record/:patientId',
    component: GeneralComponent
  }
];
