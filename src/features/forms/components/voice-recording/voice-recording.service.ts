import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { TranscriptDocument, TranscriptResponse } from '../../../../app/core/interfaces/response.interface';

@Injectable({ providedIn: 'root' })
export class VoiceRecordingService {
  private http = inject(HttpClient);
  private API_URL = `${environment.API_URL}clinical-records/upload-audio`;

  isUploadingAudio = signal<boolean>(false);
  transcript = signal<TranscriptDocument>({
    motivoConsulta: null,
    enfermedadActual: null,
    antecedentes: null,
    signosVitales: {
      frecuenciaCardiaca: null,
      presionSistolica: null,
      presionDiastolica: null,
      frecuenciaRespiratoria: null,
      temperatura: null,
      presionArterialMedia: null,
      peso: null,
      indiceMasaCorporal: null,
      superficieMasaCorporal: null
    },
    resumenDatosPositivos: null,
    resultadosExamenes: null,
    analisis: null,
    medico: null
  })

  storeMedicalRecordings(audioBlob: Blob) {
    if (audioBlob) {
      const formData = new FormData();
      formData.append('audio', audioBlob, 'recording.webm');
      this.isUploadingAudio.set(true);
      this.http.post<TranscriptResponse>(this.API_URL, formData).subscribe({
        next: (data) => {
          console.log('Audio uploaded successfully:', data);
          this.isUploadingAudio.set(false);
          this.transcript.set(data.data.transcriptDocument)
        },
        error: (error) => {
          console.error('Error uploading audio:', error);
          this.isUploadingAudio.set(false)
        },
      });
    }
  }
}
