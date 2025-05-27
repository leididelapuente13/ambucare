import { Component } from '@angular/core';
import { PatientCardComponent } from "../patient-card/patient-card.component";



@Component({
  selector: 'form-side-bar',
  imports: [PatientCardComponent],
  templateUrl: './side-bar.component.html'
})
export class SideBarComponent {
 
}
