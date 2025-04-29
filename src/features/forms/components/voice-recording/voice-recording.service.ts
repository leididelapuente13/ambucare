import { Injectable, signal, computed } from '@angular/core';
import RecordRTC from 'recordrtc';
import fixWebmDuration from 'fix-webm-duration';


@Injectable({ providedIn: 'root' })
export class VoiceRecordingService {
  private stream: MediaStream | null = null;
  private recorder: any;
  private startTime = 0;
  private timer: any;

  private recordedBlob = signal<Blob | null>(null);
  private recordingTime = signal<string>('00:00');
  private recordingFailed = signal<boolean>(false);
  private isRecording = signal<boolean>(false);

  readonly audioURL = computed(() =>
    this.recordedBlob() ? URL.createObjectURL(this.recordedBlob()!) : null
  );

  async startRecording(): Promise<void> {
    if (this.recorder) return;

    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      this.recorder = new RecordRTC(this.stream, {
        type: 'audio',
        mimeType: 'audio/wav'
      });

      this.recorder.startRecording();

      this.isRecording.set(true);
      this.startTime = Date.now();

      this.timer = setInterval(() => {
        const diff = Date.now() - this.startTime;
        const min = Math.floor(diff / 60000).toString().padStart(2, '0');
        const sec = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0');
        this.recordingTime.set(`${min}:${sec}`);
      }, 1000);
    } catch (err) {
      this.recordingFailed.set(true);
      throw err;
    }
  }

  pauseRecording(): void {
    if (this.recorder) {
      this.recorder.pauseRecording();
      clearInterval(this.timer);
    }
  }

  resumeRecording(): void {
    if (this.recorder) {
      this.recorder.resumeRecording();
      this.startTime = Date.now() - this.getElapsedMilliseconds();
      this.timer = setInterval(() => {
        const diff = Date.now() - this.startTime;
        const min = Math.floor(diff / 60000).toString().padStart(2, '0');
        const sec = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0');
        this.recordingTime.set(`${min}:${sec}`);
      }, 1000);
    }
  }

  private getElapsedMilliseconds(): number {
    const time = this.recordingTime().split(':');
    const minutes = parseInt(time[0], 10);
    const seconds = parseInt(time[1], 10);
    return (minutes * 60 + seconds) * 1000;
  }

  async stopRecording(): Promise<Blob> {
    return new Promise((resolve, reject) => {
      if (!this.recorder) return reject('No recorder initialized');

      this.recorder.stopRecording(() => {
        const blob = this.recorder!.getBlob();
        const duration = (Date.now() - this.startTime) / 1000;
        fixWebmDuration(blob, duration, (fixedBlob: Blob) => {
          this.recordedBlob.set(fixedBlob);
          this.cleanup();
          resolve(fixedBlob);
        })
      });
    });
  }

  private cleanup(): void {
    clearInterval(this.timer);
    this.isRecording.set(false);
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
    }
    this.recorder = null;
  }

  getRecordingTime = (): string => this.recordingTime();
  getRecordedBlob = (): Blob | null => this.recordedBlob();
  getAudioURL = (): string | null => this.audioURL();
  hasFailed = (): boolean => this.recordingFailed();
  isCurrentlyRecording = (): boolean => this.isRecording();
}
