import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SummaryDialogService {
  private http = inject(HttpClient);
  private showDialogSubject = new Subject<void>();
  showDialog$ = this.showDialogSubject.asObservable();

  // TODO: add interfce for summary
  patientSummary = signal('');
  isLoading = signal<boolean>(false);

  constructor() {
    this.getPatientSummary('1027');
  }

  getPatientSummary(patientId: string) {
    // TODO: add base url to .envs
    this.http.get(`https://zmmzq2q6-3000.use2.devtunnels.ms/v1/patients/1027/clinical-summary`).subscribe((response: any) => {
      // TODOD: map response to an entity
      console.log(JSON.stringify(response.data.summary));
      this.patientSummary.set(response.data.summary);
    })
  }

  triggerShow() {
    this.showDialogSubject.next();
  }

}
