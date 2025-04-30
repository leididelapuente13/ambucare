# Se tendran dos tipos de formularios

## Formularios totalmente dinámicos

- Todo (estructura, campos, validaciones) se define a partir de un JSON.
- La función onSubmit se asocia dinámicamente también (se tendra un mapa de funciones).
- Se integra la transcripción automática del audio grabado como parte del flujo.

## Formularios semi-dinámicos

- Se tiene un formulario base, y permites que se agreguen campos adicionales.
- Cada versión del formulario (incluso con los nuevos campos) debe ser guardada con un número de versión (v1, v2, etc.) o timestamp.
- Cada empresa tendría su propia versión del formulario enlazada a su ID.

### Control de versiones

Cada vez que un formulario se modifica:

- Se guardar una nueva entrada en la base de datos (no se sobreescribe el anterior).

`id | form_id | company_id | version | json_structure | created_at`


### Estructura JSON del formulario

`
{
  "formId": "aahrferejbsñw37737bdndjjs9399",
  "formName": "Nombre"
  "version": 3,
  "companyId": "clinicXYZ",
  "sections": [
    {
      "name": "Información del paciente",
      "orderIndex": 0,
      "columns": 2,
      "fields": [
        { 
          "name": "patient_name", 
          "type": "text", 
          "label": "Nombre",
          "placeholder": "Juan" 
          "orderIndex": 0,
          "columnSpan": 1,
          "rowSpan": 1,
          "required": true,
          "static": true,
          "validations": []
        },
        { 
          "name": "age", 
          "type": "number", 
          "label": "Edad", 
          "orderIndex": 1,
          "columnSpan": 1,
          "rowSpan": 1, 
          "static": false,
          "required": true,
          "validations": []
        }
      ]
    }
  ],
  components: [
    rips: [
      "name"
    ],
    vitalSigns: [
      "name"
    ]
  ]
}
`
