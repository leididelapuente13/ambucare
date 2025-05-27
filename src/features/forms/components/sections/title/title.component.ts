import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'form-section-title',
  imports: [],
  templateUrl: './title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
  title = input<string>();
}
