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
  BASE_ROUTE = `${environment.API_URL}patients`
  loadingAppointments = signal<boolean>(true);
  appointments = signal<PatientAppointment[]>([]);

  getPatientAppointments() {
    return this.http.get<PatientsAppointmentResponse>(`${this.BASE_ROUTE}/list?startDate=2024-10-01&endDate=2024-11-09`)
      .subscribe((response: PatientsAppointmentResponse) => {
        console.log(response);
        this.appointments.set(response.data);
        this.loadingAppointments.set(false);
      })
  }

  getPatientData(): PatientAppointment | null {
    const data = localStorage.getItem('patientData');
    if (data) {
      return JSON.parse(data);
    }
    return null;
  }

  removePatientData() {
    localStorage.removeItem('patientData');
  }

  storePatientData(data: PatientAppointment) {
    localStorage.setItem('patientData', JSON.stringify(data));
  }
}
