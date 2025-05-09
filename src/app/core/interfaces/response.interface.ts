import { PatientAppointment, PatientSummary } from "./patients.interface";

export interface BaseResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PatientSummaryResponse extends BaseResponse<PatientSummary> { }

export interface PatientsAppointmentResponse extends BaseResponse<PatientAppointment[]> { }
