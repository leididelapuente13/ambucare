import { PatientAppointment, PatientSummary } from "./patients.interface";

export interface BaseResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PatientSummaryResponse extends BaseResponse<PatientSummary> { }

export interface PatientsAppointmentResponse extends BaseResponse<PatientAppointment[]> { }

export interface TranscriptResponse extends BaseResponse<Transcript> { }


export interface Transcript {
  audioFile:          File;
  transcriptFile:     File;
  transcriptDocument: TranscriptDocument;
}

export interface File {
  blobName: string;
  blobUrl:  string;
}

export interface TranscriptDocument {
  motivoConsulta:        null;
  enfermedadActual:      null;
  antecedentes:          null;
  signosVitales:         SignosVitales;
  resumenDatosPositivos: null;
  resultadosExamenes:    null;
  analisis:              null;
  medico:                null;
}

export interface SignosVitales {
  frecuenciaCardiaca:     null;
  presionSistolica:       null;
  presionDiastolica:      null;
  frecuenciaRespiratoria: null;
  temperatura:            null;
  presionArterialMedia:   null;
  peso:                   null;
  indiceMasaCorporal:     null;
  superficieMasaCorporal: null;
}
