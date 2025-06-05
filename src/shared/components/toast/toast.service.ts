import { inject, Injectable } from '@angular/core';
import { ToastSeverity } from '../../../app/core/interfaces/toast-severity.interface';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  messageService = inject(MessageService);

  showToast(message: string, severity: ToastSeverity): void {
    this.messageService.add({ severity: severity, summary: 'Mensaje', detail: message, life: 3000 });
  }
}
