import { Component, Input } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-progress-bar',
  imports: [ProgressBarModule],
  templateUrl: './progress-bar.component.html',
})
export class ProgressBarComponent { 
  @Input() isLoading : boolean = false;
}
