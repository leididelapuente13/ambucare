import { Component } from '@angular/core';
import { SpeedDialModule } from 'primeng/speeddial';

@Component({
  selector: 'forms-menu',
  imports: [SpeedDialModule],
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent {
  items = [
    {
      label: 'Add',
      icon: 'pi pi-plus',
      command: () => {
        console.log('Add action clicked');
      }
    },
    {
      label: 'Edit',
      icon: 'pi pi-pencil',
      command: () => {
        console.log('Edit action clicked');
      }
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash',
      command: () => {
        console.log('Delete action clicked');
      }
    },
    {
      label: 'Upload',
      icon: 'pi pi-upload',
      command: () => {
        console.log('Upload action clicked');
      }
    },
    {
      label: 'Download',
      icon: 'pi pi-download',
      command: () => {
        console.log('Download action clicked');
      }
    }
  ];
}
