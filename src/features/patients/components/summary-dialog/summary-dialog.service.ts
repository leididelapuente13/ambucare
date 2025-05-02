import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SummaryDialogService {
  private showDialogSubject = new Subject<void>();
  showDialog$ = this.showDialogSubject.asObservable();

  triggerShow() {
    this.showDialogSubject.next();
  }
}
