import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';
import { PatientSummaryResponse } from '../../../../app/core/interfaces/response.interface';
import { environment } from '../../../../environments/environment.development';
import { BasePatientInformation } from '../../../../app/core/interfaces/patients.interface';

@Injectable({ providedIn: 'root' })
export class SummaryDialogService {
  private http = inject(HttpClient);

  private showDialogSubject = new Subject<void>();
  public showDialog$ = this.showDialogSubject.asObservable();

  patientData = signal<BasePatientInformation>({
    Sexo: '',
    Edad: '',
    NombrePaciente: ''
  });
  patientSummary = signal('');
  loadingSummary = signal<boolean>(true);

  getPatientSummary(patientId: string) {
    this.loadingSummary.set(true);
    this.http.get<PatientSummaryResponse>(`${environment.API_URL}patients/${patientId}/clinical-summary`).subscribe((response: PatientSummaryResponse) => {
      // TODOD: map response to an entity
      this.loadingSummary.set(false);
      this.patientSummary.set(response.data.summary);
      this.patientData.set(response.data.patientData);
    })
  }

  triggerShow() {
    this.showDialogSubject.next();
  }
}
