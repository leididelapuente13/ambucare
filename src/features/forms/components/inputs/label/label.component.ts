import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'form-label',
  imports: [],
  templateUrl: './label.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelComponent {
  @Input() label!: string;
  @Input() id!: string;
}
