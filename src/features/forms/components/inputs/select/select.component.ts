import { Component, Input } from '@angular/core';
import { Select } from 'primeng/select';
import { LabelComponent } from "../label/label.component";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'form-select',
  imports: [LabelComponent, Select],
  templateUrl: './select.component.html',
})
export class SelectComponent {
  @Input() label!: string;
  @Input() id!: string;
  @Input() control!: FormControl;
  @Input() errorMessage: string = 'Este campo es requerido.';
  @Input() options: any[] = [];
}
