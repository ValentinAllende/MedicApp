const { body, param } = require("express-validator");
const validationFormat = require("./validatorFormat");

/* Appointment Routes Validations */
const paramIdAppointmentValidator = [
  param("idAppointment", "Formato de ID incorrecto")
    .trim()
    .notEmpty()
    .escape(),
  validationFormat
];

const bodyAppointmentValidatorPOST = [
  body("doctor")
    .trim()
    .notEmpty().withMessage("El campo Doctor está vacio"),
  body("patient")
    .trim()
    .notEmpty().withMessage("El campo Paciente está vacio"),
  body("date")
    .trim()
    .notEmpty().withMessage("El campo fecha de cita está vacio")
    .isISO8601('yyyy-mm-dd'),
  body("hour")
    .trim()
    .notEmpty().withMessage("El campo hora de cita está vacio")
    .matches('^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$'),
  body("additionalComment")
    .trim()
    .notEmpty().withMessage("El campo comentario adicional está vacio")
    .isLength({min: 50}).withMessage("Comentario: Se requieren al menos 50 caracteres.")
    .optional({nullable: true, checkFalsy: true}),
  validationFormat
];

const bodyAppointmentValidatorPATCH = [
  body("date")
    .trim()
    .notEmpty().withMessage("El campo fecha de cita está vacio")
    .isISO8601('yyyy-mm-dd')
    .optional({nullable: true, checkFalsy: true}),
  body("hour")
    .trim()
    .notEmpty().withMessage("El campo hora de cita está vacio")
    .matches('^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$')
    .optional({nullable: true, checkFalsy: true}),
  body("additionalComment")
    .trim()
    .notEmpty().withMessage("El campo comentario adicional está vacio")
    .isLength({min: 50}).withMessage("Comentario: Se requieren al menos 50 caracteres.")
    .optional({nullable: true, checkFalsy: true}),
  validationFormat
];

module.exports = {
  paramIdAppointmentValidator,
  bodyAppointmentValidatorPOST,
  bodyAppointmentValidatorPATCH
}