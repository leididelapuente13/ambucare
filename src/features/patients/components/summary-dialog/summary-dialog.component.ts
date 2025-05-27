import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dialog } from 'primeng/dialog';
import { MarkdownModule } from 'ngx-markdown';
import { SummaryDialogService } from './summary-dialog.service';
import { ProgressBarComponent } from "../../../../shared/components/progress-bar/progress-bar.component";
import { PatientCardComponent } from "../patient-card/patient-card.component";
@Component({
  selector: 'patient-summary-dialog',
  imports: [Dialog, MarkdownModule, ProgressBarComponent, PatientCardComponent],
  templateUrl: './summary-dialog.component.html',
  styleUrl: 'summary-dialog.component.scss',
})
export class SummaryDialogComponent {
  visible = false;
  dialogService = inject(SummaryDialogService);
  route = inject(ActivatedRoute);
  isLoadingSummary = computed(() => this.dialogService.loadingSummary());
  patientData = computed(() => this.dialogService.patientData());
  patientSummary = computed(() =>
    this.dialogService.patientSummary()
      .replace(/\\n/g, '\n')
      .replace(/\s*```$/, '')
      .replace(/\s*```html$/, '')
      .replace(/\s*```html/g, '')
      .trim()
  );
  patientId : string | null = null;

  constructor() {
    this.patientId = this.route.snapshot.paramMap.get('patientId');
    this.dialogService.getPatientSummary(this.patientId!);
  }

  ngOnInit() {
    this.dialogService.showDialog$.subscribe(() => {
      this.visible = true;
    });
  }
}
