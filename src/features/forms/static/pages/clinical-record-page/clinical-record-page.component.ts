import { Component, computed, inject } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { TitleComponent } from "../../../components/sections/title/title.component";
import { InputTextModule } from 'primeng/inputtext';
import { SplitterModule } from 'primeng/splitter';
import { TextareaComponent } from "../../../components/inputs/textarea/textarea.component";
import { MenuComponent } from "../../../components/menu/menu.component";
import { VitalSignsComponent } from "../../../components/sections/vital-signs/vital-signs.component";
import { RipsComponent } from "../../../components/sections/rips/rips.component";
import { SelectComponent } from "../../../components/inputs/select/select.component";
import { SummaryDialogComponent } from "../../../../patients/components/summary-dialog/summary-dialog.component";
import { SideBarComponent } from "../../../components/side-bar/side-bar.component";
import { PatientService } from '../../../../../app/core/services/patient.service';
import { ToastComponent } from "../../../../../shared/components/toast/toast.component";
import { LabelComponent } from "../../../components/inputs/label/label.component";
import { ToastService } from '../../../../../shared/components/toast/toast.service';
import { TranscriptDocument } from '../../../../../app/core/interfaces/response.interface';
import { VoiceRecordingService } from '../../../components/voice-recording/voice-recording.service';

@Component({
  selector: 'app-clinical-record-page',
  imports: [HeaderComponent, TitleComponent, InputTextModule, TextareaComponent, MenuComponent, VitalSignsComponent, RipsComponent, SelectComponent, SplitterModule, SummaryDialogComponent, SideBarComponent, ToastComponent, LabelComponent],
  templateUrl: './clinical-record-page.component.html',
})
export class ClinicalRecordPageComponent {
  toastService = inject(ToastService);
  patientService = inject(PatientService);
  voiceRecordingService = inject(VoiceRecordingService);

  appoinmentDate = new Date().toLocaleDateString('es-ES');
  patientAppoinmentData = computed(() => this.patientService.getPatientData());

  transcript  = this.voiceRecordingService.transcript;

  showToast() {
    this.toastService.showToast(
      'No bro',
      'info'
    );
  }


}
