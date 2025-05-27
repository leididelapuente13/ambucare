import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { TextareaModule } from 'primeng/textarea';
import { FormControl } from '@angular/forms';
import { LabelComponent } from "../label/label.component";

@Component({
  selector: 'form-textarea',
  imports: [TextareaModule, LabelComponent],
  templateUrl: './textarea.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaComponent {
  @Input() label!: string;
  @Input() id!: string;
  @Input() placeholder: string = '';
  @Input() rows: number = 4;
  @Input() control!: FormControl;
  @Input() errorMessage: string = 'This field is required.';
}
