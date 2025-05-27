import { Component, inject, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { PatientAppointment } from '../../../../app/core/interfaces/patients.interface'
import { PatientService } from '../../../../app/core/services/patient.service';
import { TextComponent } from "./text/text.component";

@Component({
  selector: 'form-patient-card',
  imports: [UpperCasePipe, CheckboxModule, TextComponent],
  templateUrl: './patient-card.component.html',
})
export class PatientCardComponent {

  patientService = inject(PatientService);

  patient = signal<PatientAppointment | null>(this.patientService.getPatientData());
}
