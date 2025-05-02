import { Component, inject } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { SummaryDialogService } from './summary-dialog.service';

@Component({
  selector: 'patient-summary-dialog',
  imports: [Dialog],
  templateUrl: './summary-dialog.component.html',
})
export class SummaryDialogComponent {
  visible = false;

   dialogService = inject(SummaryDialogService);

  ngOnInit() {
    this.dialogService.showDialog$.subscribe(() => {
      this.visible = true;
    });
  }
}
