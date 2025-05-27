import { Component } from '@angular/core';
import { TitleComponent } from "../title/title.component";
import { InputComponent } from "../../inputs/input/input.component";
import { SelectComponent } from "../../inputs/select/select.component";
import { TextareaComponent } from "../../inputs/textarea/textarea.component";

@Component({
  selector: 'form-rips',
  imports: [TitleComponent, InputComponent, SelectComponent, TextareaComponent],
  templateUrl: './rips.component.html',
  styles: ``
})
export class RipsComponent {

}
