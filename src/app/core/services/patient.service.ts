import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PatientAppointment } from '../interfaces/patients.interface';
import { PatientsAppointmentResponse } from '../interfaces/response.interface';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  http = inject(HttpClient);
  loadingAppointments = signal<boolean>(true);
  appointments = signal<PatientAppointment[]>([]);

  getPatientAppointments() {
    return this.http.get<PatientsAppointmentResponse>(`${environment.API_URL}patients/list?startDate=2024-10-01&endDate=2024-11-09`)
      .subscribe((response: any) => {
        console.log(response);
        this.appointments.set(response.data);
        this.loadingAppointments.set(false);
      })
  }
}
