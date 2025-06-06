import { NgClass } from '@angular/common';
import { Component, signal, computed, ChangeDetectorRef, inject } from '@angular/core';
import { VoiceRecordingService } from './voice-recording.service';
import { ProgressBarComponent } from '../../../../shared/components/progress-bar/progress-bar.component'

@Component({
  selector: 'form-voice-recording',
  standalone: true,
  templateUrl: './voice-recording.component.html',
  imports: [NgClass, ProgressBarComponent]
})
export class VoiceRecordingComponent {
  voiceRecordingService = inject(VoiceRecordingService);

  private mediaRecorder!: MediaRecorder;
  private chunks: Blob[] = [];
  private startTime = 0;
  private maxDuration = 20 * 60;
  private intervalId: any;

  isRecording = signal(false);
  isPaused = signal(false);
  isLoading = signal(false);
  elapsedTime = signal(0);
  audioBlob = signal<Blob | null>(null);
  audioUrl = signal<string | null>(null);
  isUploadingAudio = computed(()=>this.voiceRecordingService.isUploadingAudio);

  formattedTime = computed(() => {
    const total = this.elapsedTime();
    const minutes = Math.floor(total / 60).toString().padStart(2, '0');
    const seconds = (total % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  });

  constructor(private cdr: ChangeDetectorRef) {
    console.log(this.isUploadingAudio())
   }

  start() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      this.mediaRecorder = new MediaRecorder(stream);
      this.chunks = [];
      this.elapsedTime.set(0);
      this.audioBlob.set(null);
      this.audioUrl.set(null);

      this.mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) this.chunks.push(e.data);
      };

      this.mediaRecorder.onstop = () => {
        this.isLoading.set(true);
        this.cdr.detectChanges();

        const blob = new Blob(this.chunks, { type: 'audio/webm' });
        const url = URL.createObjectURL(blob);
        this.audioBlob.set(blob);
        this.audioUrl.set(url);
        this.isLoading.set(false);
        this.cdr.detectChanges();
      };

      this.mediaRecorder.start();
      this.isRecording.set(true);
      this.isPaused.set(false);
      this.startTimer();
      this.cdr.detectChanges();
    });
  }

  pauseResume() {
    if (!this.mediaRecorder) return;

    if (this.isPaused()) {
      this.mediaRecorder.resume();
      this.isPaused.set(false);
      this.startTimer();
    } else {
      this.mediaRecorder.pause();
      this.isPaused.set(true);
      clearInterval(this.intervalId);
    }

    this.cdr.detectChanges();
  }

  stop() {
    if (!this.mediaRecorder) return;

    this.mediaRecorder.stop();
    this.mediaRecorder.stream.getTracks().forEach((track) => track.stop());
    this.isRecording.set(false);
    this.isPaused.set(false);
    clearInterval(this.intervalId);
    this.cdr.detectChanges();
  }

  download() {
    if (!this.audioBlob()) return;
    const a = document.createElement('a');
    a.href = this.audioUrl()!;
    a.download = 'grabacion.webm';
    a.click();
    console.log('blob', this.audioBlob());
    console.log('blob', this.audioBlob());
    this.voiceRecordingService.storeMedicalRecordings(this.audioBlob()!);
  }

  private startTimer() {
    this.intervalId = setInterval(() => {
      const newTime = this.elapsedTime() + 1;
      if (newTime >= this.maxDuration) {
        this.stop();
        return;
      }
      this.elapsedTime.set(newTime);
      this.cdr.detectChanges();
    }, 1000);
  }
}
