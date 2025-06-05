import { Component, inject } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { ToastService } from './toast.service';


@Component({
  selector: 'app-toast',
  imports: [ToastModule],
  templateUrl: './toast.component.html',
})
export class ToastComponent {
  toastService = inject(ToastService);
}
