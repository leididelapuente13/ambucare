import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SummaryDialogService {
  private http = inject(HttpClient);
  private showDialogSubject = new Subject<void>();
  showDialog$ = this.showDialogSubject.asObservable();

  // TODO: add interfce for summary
  patientSummary = signal({});
  isLoading = signal<boolean>(false);

  constructor(){
    this.getPatientSummary('79341');
  }

  triggerShow() {
    this.showDialogSubject.next();
  }

  getPatientSummary(patientId: string) {
    // TODO: add base url to .envs
    this.http.get(`https://zmmzq2q6-3000.use2.devtunnels.ms/v1/patients/79341/clinical-summary`).subscribe((response) => {
      // TODOD: map response to an entity
      this.patientSummary.set(response);
      console.log('response', response);
    })
  }

}
