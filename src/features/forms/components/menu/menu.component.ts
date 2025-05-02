import { Component, inject } from '@angular/core';
import { SpeedDialModule } from 'primeng/speeddial';
import { SummaryDialogService } from '../../../patients/components/summary-dialog/summary-dialog.service';

@Component({
  selector: 'forms-menu',
  imports: [SpeedDialModule],
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent {

  dialogService = inject(SummaryDialogService);

  items = [
    {
      label: 'Resumen',
      icon: 'pi pi-clipboard',
      command: ()=>{
        this.dialogService.triggerShow();
      }
    }
  ];
}
