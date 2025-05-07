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
    this.dialogService.patientSummary().replace(/\\n/g, '\n').replace(/\s*```$/, '').replace(/⸻/g, '---').trim()
  );

  constructor(){
    effect(()=>{
      console.log('SummaryDialogComponent initialized', this.patientSummary());
    })
  }

  patientSummaryFormatted =
    `# Resumen Médico del Paciente

**Nombre del Paciente:** Jesús Lynch  
**Edad:** 43 años  
**Sexo:** Masculino  
**Fecha del Resumen:** 27 de marzo de 2025  
**Número de Registro Médico:** 141  

---

## 1. Motivo de la Última Visita

Consulta de seguimiento con el Dr. Carlos Jaramillo, especialista en Nutrición, para evaluar el estado general de salud y manejo de condiciones psiquiátricas activas.

---

## 2. Diagnósticos Principales (Previos)

- Diabetes Tipo 2 (diagnosticada hace 5 años)  
- Condición psiquiátrica activa (ICD-u45, riesgo alto)

---

## 3. Medicamentos Actuales

- Atorvastatina 20 mg, vía oral, duración 9 meses  
- Lisinopril 10 mg, vía oral, duración 6 meses

---

## 4. Alergias Conocidas

- Huevos  
- Polen

---

## 5. Historia Médica Relevante

- Apéndice extirpado a los 12 años  
- Padre con antecedentes de hipertensión  
- No fumador, consumo de alcohol presente  
- Actividad sexual con múltiples parejas sin protección

---

## 6. Signos Vitales Recientes

- Altura: 172.6 cm  
- Peso: 94.5 kg  
- IMC: 31.71  
- Temperatura: 37.6 °C  
- Frecuencia cardíaca: 60 lpm  
- Presión arterial: 136/75 mmHg  
- Frecuencia respiratoria: 15 rpm  
- Saturación de oxígeno: 99%

---

## 7. Pruebas de Laboratorio Recientes

- Glucosa en sangre: 95 mg/dL (rango de referencia: 70-99 mg/dL)  
- Hemoglobina: 14.2 g/dL (rango de referencia: 12.0-16.0 g/dL)  
- ALT: 25 U/L (rango de referencia: 7-56 U/L)

---

## 8. Plan Médico Actual

- Evaluación neurológica en Hospital Central  
- Continuar con el manejo nutricional y control metabólico  
- Educación sobre prácticas sexuales seguras

---

## 9. Procedimientos Recientes

- Sutura simple de heridas superficiales (CPT 12001)

---

## 10. Vacunas Administradas

- HPV (Virus del Papiloma Humano), Intramuscular, 17 de julio de 2023  
- MMR (Sarampión, Paperas, Rubéola), Subcutánea, 12 de octubre de 2022  
- Tdap (Tétanos, Difteria, Tos ferina), Intramuscular, 7 de junio de 2024

---

Este resumen clínico proporciona una visión general del estado de salud actual del paciente Jesús Lynch y debe ser utilizado para guiar las decisiones médicas futuras.`

  summaryParsed = computed(() => marked.parse(this.patientSummary()))

  ngOnInit() {
    this.dialogService.showDialog$.subscribe(() => {
      this.visible = true;
    });
  }
}
