import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { PatientAppointment } from '../../../../app/core/interfaces/patients.interface';
import { PatientService } from '../../../../app/core/services/patient.service';
import { TopBarComponent } from "../../../../shared/components/layout/top-bar/top-bar.component";
@Component({
  selector: 'app-patients-page',
  imports: [TableModule, ButtonModule, RouterLink, TopBarComponent],
  templateUrl: './patients-page.component.html',
  styles: ``
})
export class PatientsPageComponent {

  patientService = inject(PatientService);

  appointments = computed<PatientAppointment[]>(()=>this.patientService.appointments());
  appointmentsLoading = computed(()=> this.patientService.loadingAppointments());

  constructor() {
    this.patientService.getPatientAppointments();
    this.patientService.removePatientData();
  }

  savePatientData(data: PatientAppointment) {
    this.patientService.storePatientData(data);
  }
}
