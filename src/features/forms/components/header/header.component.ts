import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { VoiceRecordingComponent } from "../voice-recording/voice-recording.component";

@Component({
  selector: 'form-header',
  imports: [NgOptimizedImage, VoiceRecordingComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  formName = input<string>('Historia Clínica');
}
