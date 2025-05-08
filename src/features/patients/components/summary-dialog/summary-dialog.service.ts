import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';
import { PatientData, PatientSummaryResponse } from '../../../../app/core/interfaces/response.interface';

@Injectable({ providedIn: 'root' })
export class SummaryDialogService {
  private http = inject(HttpClient);

  private showDialogSubject = new Subject<void>();
  public showDialog$ = this.showDialogSubject.asObservable();

  // TODO: add interfce for summary
  patientData = signal<PatientData>({
    Sexo: '',
    Edad: '0',
    NombrePaciente: ''
  });
  patientSummary = signal('');
  loadingSummary = signal<boolean>(true);

  constructor() {
    this.getPatientSummary('1027');
  }

  getPatientSummary(patientId: string) {
    // TODO: add base url to .envs
    this.http.get<PatientSummaryResponse>(`https://zmmzq2q6-3000.use2.devtunnels.ms/v1/patients/2723/clinical-summary`).subscribe((response: PatientSummaryResponse) => {
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
