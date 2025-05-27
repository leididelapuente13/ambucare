import { Component } from '@angular/core';
import { TitleComponent } from "../title/title.component";
import { InputComponent } from "../../inputs/input/input.component";

@Component({
  selector: 'form-vital-signs',
  imports: [TitleComponent, InputComponent],
  templateUrl: './vital-signs.component.html',
  styles: ``
})
export class VitalSignsComponent {

}
