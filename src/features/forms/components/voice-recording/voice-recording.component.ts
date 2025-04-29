import { CommonModule } from "@angular/common";
import { Component, computed, inject, signal } from "@angular/core";
import { VoiceRecordingService } from "./voice-recording.service";

@Component({
  selector: 'forms-voice-recording',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './voice-recording.component.html',
})
export class AudioRecorderComponent {
  voiceRecordingService = inject(VoiceRecordingService);
  isRecording = signal(false);
  isPaused = signal(false);
  audioUrl = signal<string | null>(null);
  isLoading = signal(false);

  formattedDuration = computed(() => this.voiceRecordingService.getRecordingTime());


  async start() {
    this.audioUrl.set(null);
    this.isRecording.set(true);
    this.isPaused.set(false);
    await this.voiceRecordingService.startRecording();
  }

  pauseResume() {
    if (this.isPaused()) {
      this.voiceRecordingService.resumeRecording();
      this.isPaused.set(false);
    } else {
      this.voiceRecordingService.pauseRecording();
      this.isPaused.set(true);
    }
  }

  async stop() {
    this.isRecording.set(false);
    this.isPaused.set(false);
    this.isLoading.set(true);

    try {
      const blob = await this.voiceRecordingService.stopRecording();
      const url = URL.createObjectURL(blob);
      this.audioUrl.set(url);
    } catch (err) {
      console.error('Failed to stop recording:', err);
    } finally {
      this.isLoading.set(false);
    }
  }

  download() {
    const a = document.createElement('a');
    a.href = this.audioUrl()!;
    a.download = 'recording.wav';
    a.click();
  }
}
