import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-toast',
  imports: [],
  template: `<p>toast works!</p>`,
  styleUrl: './toast.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent { }
