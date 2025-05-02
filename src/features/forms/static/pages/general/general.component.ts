import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import historia_clinica  from '../../../../../shared/utils/Historia Clínica _template.json';
import { AudioRecorderComponent } from '../../../components/voice-recording/voice-recording.component';
import { CommonModule, JsonPipe, NgStyle, UpperCasePipe } from '@angular/common';
import { MenuComponent } from '../../../components/menu/menu.component';
import { SummaryDialogComponent } from "../../../../patients/components/summary-dialog/summary-dialog.component";

export interface FormSection {
  id: string;
  name: string;
  colNumber: number;
  orderIndex: number;
  fields: FormField[];
}

export interface FormField {

  id: string;
  label: string;
  placeholder: string;
  required: boolean;
  columnSpan: number;
  type: string;
  defaultValue?: string;
  isFixed?: boolean;
  orderIndex: number;
}
export interface FormTemplate {
  name: string;
  description: string;
  version: number;
  sections: FormSection[];
}

@Component({
  selector: 'app-general',
  imports: [AudioRecorderComponent, UpperCasePipe, JsonPipe, NgStyle, ReactiveFormsModule, CommonModule, MenuComponent, SummaryDialogComponent],
  templateUrl: './general.component.html',
  styles: ``
})
export class GeneralComponent {
  @Input() template: FormTemplate = historia_clinica;
  formGroup!: FormGroup;

  fb = inject(FormBuilder)

  ngOnInit() {
    const group: { [key: string]: any } = {};

    for (const section of this.template.sections) {
      for (const field of section.fields) {
        group[field.id] = [
          '',
          field.required ? Validators.required : []
        ];
      }
    }

    this.formGroup = this.fb.group(group);
  }

  submit() {
    if (this.formGroup.valid) {
      console.log('Submitted:', this.formGroup.value);
    } else {
      console.warn('Form invalid!');
    }
  }

  exportTemplate() {
    const dataStr = JSON.stringify(this.template, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${this.template.name || 'form-template'}.json`;
    a.click();
  }

  importTemplate(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      const json = JSON.parse(reader.result as string);
      this.template = json;
    };
    reader.readAsText(file);
  }

  trackSection(index: number, section: any) {
    return section.id;
  }

  trackField(index: number, field: any) {
    return field.id;
  }
}
