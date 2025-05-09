export interface PatientAppointment {
  IdCita: string;
  IdPaciente: string;
  Paciente: string;
  FechaCita: string;
  Servicio: string;
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
