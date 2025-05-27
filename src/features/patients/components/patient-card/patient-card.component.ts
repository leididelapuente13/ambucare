import { Component, Input } from '@angular/core';
import { BasePatientInformation } from '../../../../app/core/interfaces/patients.interface';

@Component({
  selector: 'patient-card',
  imports: [],
  templateUrl: './patient-card.component.html',
})
export class PatientCardComponent {
  @Input() patientData: BasePatientInformation = {
    Sexo: '',
    Edad: '',
    NombrePaciente: ''
  };
}

