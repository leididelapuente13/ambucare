import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgClass } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { LabelComponent } from "../label/label.component";

@Component({
  selector: 'form-input',
  imports: [InputTextModule, LabelComponent, NgClass],
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() label!: string;
  @Input() secondaryLabel?: string;
  @Input() id!: string;
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() control!: FormControl;
  @Input() errorMessage: string = 'Este campo es requerido.';
  @Input() value : string | number | null = null;
}
