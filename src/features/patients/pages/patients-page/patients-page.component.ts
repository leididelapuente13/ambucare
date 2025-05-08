import { Component, signal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PatientAppointment } from '../../../../app/core/interfaces/patients.interface';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-patients-page',
  imports: [TableModule, ButtonModule, RouterLink],
  templateUrl: './patients-page.component.html',
  styles: ``
})
export class PatientsPageComponent {

  appointments = signal<PatientAppointment[]>([
    {
      number: '1',
      patient: 'John Doe',
      date: '2023-10-01',
      receptionDate: '2023-10-01',
      service: 'General Checkup',
      type: 'Medicina General'
    },
    {
      number: '2',
      patient: 'Jane Smith',
      date: '2023-10-01',
      receptionDate: '2023-10-01',
      service: 'Dental Checkup',
      type: 'Medicina General'
    },
    {
      number: '3',
      patient: 'Alice Johnson',
      date: '2023-10-01',
      receptionDate: '2023-10-01',
      service: 'Eye Checkup',
      type: 'Medicina General'
    }
  ]);

}
