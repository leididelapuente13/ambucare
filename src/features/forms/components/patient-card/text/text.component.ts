import { Component, input } from '@angular/core';

@Component({
  selector: 'card-text',
  imports: [],
  templateUrl: './text.component.html',
})
export class TextComponent { 
  key = input.required<string>();
  value = input<string>();
}
