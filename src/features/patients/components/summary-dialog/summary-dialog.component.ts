import { Component, computed, effect, inject, signal } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { MarkdownModule } from 'ngx-markdown';
import { SummaryDialogService } from './summary-dialog.service';
import { marked } from 'marked';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'patient-summary-dialog',
  imports: [Dialog, MarkdownModule],
  templateUrl: './summary-dialog.component.html',
  styleUrl: 'summary-dialog.component.scss',
})
export class SummaryDialogComponent {
  visible = false;
  dialogService = inject(SummaryDialogService);
  patientSummary = computed(() =>
    this.dialogService.patientSummary().replace(/\\n/g, '\n').replace(/\s*```$/, '').trim()
  );

  // patientSummary = signal(`# Paciente Resumen de Historia Clínica
      
  //     **Nombre del Paciente:** Información no disponible en los datos proporcionados  
  //     **Edad:** Información no disponible en los datos proporcionados  
  //     **Sexo:** Información no disponible en los datos proporcionados  
  //     **Fecha del Resumen:** 4 de octubre de 2024  
  //     **Número de Historia Clínica:** AD0602
      
  //     ---
      
  //     ### 1. Motivo de la Última Visita
      
  //     Consulta de control para determinar si es alérgica a la amoxicilina.
      
  //     ---
      
  //     ### 2. Diagnóstico Principal (Previo)
      
  //     - Historia personal de alergia a otras drogas, medicamentos y sustancias biológicas no especificadas (Z889).
      
  //     ---
      
  //     ### 3. Medicamentos Actuales
      
  //     No se mencionan medicamentos actuales en el registro.
      
  //     ---
      
  //     ### 4. Alergias Conocidas
      
  //     - Alergia a amoxicilina, sulfas, metronidazol y pantoprazol (según refiere el paciente).
      
  //     ---
      
  //     ### 5. Historia Médica Relevante
      
  //     - El paciente refiere alergia a medicamentos desde sus primeros años de vida, incluyendo amoxicilina, sulfas, metronidazol y pantoprazol, con lesiones eritematopapulosas generalizadas.  
  //     - Remitida para valoración y estudios de alergia a medicamentos.
      
  //     ---
      
  //     ### 6. Signos Vitales Recientes
      
  //     - Presión arterial: No especificada (se indica "/")  
  //     - Frecuencia cardíaca: No especificada  
  //     - Frecuencia respiratoria: No especificada  
  //     - Temperatura: No especificada  
  //     - Talla: No especificada  
  //     - Peso: No especificado  
  //     - Índice de Masa Corporal: No especificado
      
  //     ---
      
  //     ### 7. Pruebas Recientes Notables
      
  //     - Pruebas de alergia a medicamentos (en curso).
      
  //     ---
      
  //     ### 8. Plan Médico Actual
      
  //     - No tomar amoxicilina ni derivados.  
  //     - Realización de pruebas de alergia a medicamentos.
  //     `)

  summaryParsed = computed(()=>marked.parse(this.patientSummary()))

  ngOnInit() {
    this.dialogService.showDialog$.subscribe(() => {
      this.visible = true;
    });
  }
}
