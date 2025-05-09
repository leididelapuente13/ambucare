import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';

@Injectable({ providedIn: 'root' })
export class VoiceRecordingService {
  private http = inject(HttpClient);

  storeMedicalRecordings(audioBlob: Blob) {
    console.log('Storing audio blob:', audioBlob);
    if (audioBlob) {
      const formData = new FormData();
      formData.append('audio', audioBlob, 'recording.webm');
      console.log('FormData:', formData);

      const apiUrl = `${environment.API_URL}clinical-records/upload-audio`;

      this.http.post(apiUrl, formData).subscribe({
        next: (data) => {
          console.log('Audio uploaded successfully:', data);
        },
        error: (error) => {
          console.error('Error uploading audio:', error);
        }
      });
    }
  }
}
