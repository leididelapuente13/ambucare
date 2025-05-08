import { Component, computed, effect, inject } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { MarkdownModule } from 'ngx-markdown';
import { SummaryDialogService } from './summary-dialog.service';
import { marked } from 'marked';
import { ProgressBarComponent } from "../../../../shared/components/progress-bar/progress-bar.component";
@Component({
  selector: 'patient-summary-dialog',
  imports: [Dialog, MarkdownModule, ProgressBarComponent],
  templateUrl: './summary-dialog.component.html',
  styleUrl: 'summary-dialog.component.scss',
})
export class SummaryDialogComponent {
  visible = false;
  dialogService = inject(SummaryDialogService);
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

  ngOnInit() {
    this.dialogService.showDialog$.subscribe(() => {
      this.visible = true;
    });
  }
}
