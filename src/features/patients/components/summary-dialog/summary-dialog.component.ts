import { Component, inject } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { MarkdownModule } from 'ngx-markdown';
import { SummaryDialogService } from './summary-dialog.service';

@Component({
  selector: 'patient-summary-dialog',
  imports: [Dialog, MarkdownModule],
  templateUrl: './summary-dialog.component.html',
  styleUrl: 'summary-dialog.component.scss',
})
export class SummaryDialogComponent {
  visible = false;
  dialogService = inject(SummaryDialogService);
  // patientSummary = this.dialogService.patientSummary();
  patientSummary = `
  # Nota SOAP
  
  ## SUBJECTIVO (S)
  - **Queja principal**: Dolor lumbar
  - **Historia de la enfermedad actual**: 
    - Dolor lumbar de 4 días de evolución
    - Asociado a esfuerzo físico
    - No irradiado a extremidades inferiores
    - Intensidad del dolor: 6/10
    - No mejora con analgésicos convencionales
  - **Antecedentes médicos**:
    - No tiene antecedentes alérgicos a los AINEs
    - Antecedentes familiares de hipertensión y diabetes
  
  ## OBJETIVO (O)
  - **Signos vitales**:
    - Presión arterial: 120/70 mmHg
    - Frecuencia cardíaca: 78 bpm
    - Frecuencia respiratoria: 18 rpm
    - Saturación de oxígeno: 100%
  - **Examen físico**:
    - Pulmones claros y bien ventilados
    - Abdomen blando, bien depresible, sin masas
    - Extremidades sin edema, pulsos presentes
    - Sistema nervioso central: sin déficit motor ni sensitivo
    - Prueba de Lasègue positiva en el lado derecho
  
  ## EVALUACIÓN (A)
  - **Diagnóstico**:
    - Lumbago agudo probablemente asociado a esfuerzo físico
  - **Razonamiento clínico**:
    - Los síntomas y hallazgos clínicos son consistentes con lumbago agudo, descartando otros diagnósticos diferenciales.
  
  ## PLAN (P)
  - **Recomendaciones de tratamiento**:
    - Reposo
    - Naproxeno 500 mg cada 12 horas
    - Metocarbamol 750 mg cada 12 horas
    - Dexametasona 4 mg intramuscular
  - **Seguimiento**:
    - Control en una semana
  - **Educación al paciente**:
    - Importancia del reposo y adherencia al tratamiento prescrito
  
  **Información limitada disponible en algunas secciones.**
  `;
  

  ngOnInit() {
    this.dialogService.showDialog$.subscribe(() => {
      this.visible = true;
    });
  }
}
