import { Routes } from '@angular/router';
import { PatientsPageComponent } from '../features/patients/pages/patients-page/patients-page.component';
import { ClinicalRecordPageComponent } from '../features/forms/static/pages/clinical-record-page/clinical-record-page.component';

export const routes: Routes = [
  {
    path: '',
    component: PatientsPageComponent
  },
  {
    path: 'clinical-record/:patientId',
    component: ClinicalRecordPageComponent
  },
];
