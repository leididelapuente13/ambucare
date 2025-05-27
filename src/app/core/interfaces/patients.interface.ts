export interface PatientAppointment {
  IdCita: string;
  IdPaciente: string;
  Paciente: string;
  Identificacion: string;
  DirAfil: string;
  FechaCita: string;
  Servicio: string;
  Administradora: string;
  EdadTexto: string;
  Municipio: string;
  Sexo: string;
}

export interface BasePatientInformation {
  Sexo: string;
  Edad: string;
  NombrePaciente: string;
}

export interface PatientSummary {
  patientData: BasePatientInformation;
  summary: string;
}
