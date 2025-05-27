import { Component, inject } from '@angular/core';
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

@Component({
  selector: 'app-clinical-record-page',
  imports: [HeaderComponent, TitleComponent, InputTextModule, TextareaComponent, MenuComponent, VitalSignsComponent, RipsComponent, SelectComponent, SplitterModule, SummaryDialogComponent, SideBarComponent],
  templateUrl: './clinical-record-page.component.html',
})
export class ClinicalRecordPageComponent {
  appoinmentDate = new Date().toLocaleDateString('es-ES');
  patientData = inject(PatientService).getPatientData();
}
