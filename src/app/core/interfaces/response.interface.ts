export interface Response<T> {
  data: {
    [key: string]: T[] | T | string | object;
  }
  message: string;
  success: boolean;
}

export interface PatientData {
  Sexo: string;
  Edad: string;
  NombrePaciente: string;
}

export interface PatientSummaryResponse extends Response<string> {
  data: {
    patientData: PatientData;
    summary: string;
  }
}

/**
 * data
: 
patientData
: 
{Sexo: 'M', Edad: '24 año(s), 9 mes(es) 8 dia(s)', NombrePaciente: 'JHOELIS  VALDELAMAR BATISTA'}
summary
: 
"```\nPaciente Resumen de Historia Clínica\n\nNombre del Paciente: Información no disponible en los datos proporcionados\nEdad: Información no disponible en los datos proporcionados\nSexo: Información no disponible en los datos proporcionados\nFecha del Resumen: 4 de octubre de 2024\nNúmero de Historia Clínica: AD0602\n\n⸻\n\n1.  Motivo de la Última Visita\n\nConsulta de control para determinar si es alérgica a la amoxicilina.\n\n⸻\n\n2.  Diagnóstico Principal\n\n*   Historia personal de alergia a otras drogas, medicamentos y sustancias biológicas no especificadas (Z889).\n\n⸻\n\n3.  Alergias Conocidas\n\n*   Alergia a medicamentos reportada: amoxicilina, sulfas, metronidazol, pantoprazol.  Refiere lesiones eritematopapulosas generalizadas con estos medicamentos.\n\n⸻\n\n4.  Hallazgos Relevantes del Examen Físico\n\n*   Estado general: Buen estado general.\n*   Signos vitales: No se proporcionan valores específicos de frecuencia cardíaca, frecuencia respiratoria, presión arterial o temperatura.\n\n⸻\n\n5.  Plan Médico Actual\n\n*   No tomar amoxicilina ni derivados.\n*   Asiste a realización de pruebas de alergia a medicamentos.\n*   Remitida para valoración y estudios.\n\n⸻\n\n6.  Análisis\n\n*   Paciente quien refiere que desde sus primeros años de vida presento alergia a medicamentos, los cuales indica: amoxicilina, sulfas, metronidazol, pantoprazol. Refiere lesiones eritematopapulosas generalizadas con estos. Remitida para valoración y estudios.\n```\n"
[[Prototype]]
: 
Object
message
: 
"Operation completed successfully"
path
: 
"/v1/patients/1027/clinical-summary"
statusCode
: 
200
success
: 
true
timestamp
: 
"2025-05-07T22:25:15.777Z"
 */