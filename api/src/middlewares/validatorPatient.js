import { validationResult } from "express-validator";
import { body, param } from "express-validator";

export const validationPatient = (req, res, next) => { 
  const errorFormatter = ({ msg, param }) => {
    return {[param]: msg};
  };
  const errors = validationResult(req).formatWith(errorFormatter);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

/* Patient Routes Validations */
export const paramIdPatientValidator = [
  param("idPatient", "Formato de ID incorrecto")
    .trim()
    .notEmpty()
    .escape(),
    validationPatient
];
export const bodyPatientValidator = [
  body("name")
    .trim()
    .notEmpty().withMessage("El campo nombre está vacio"),
  body("email")
    .trim()
    .notEmpty().withMessage("El campo email está vacio")
    .isEmail().withMessage("Formato de email incorrecto")
    .normalizeEmail(),
  body("password")
    .trim()
    .notEmpty().withMessage("El campo password está vacio")
    .isLength({min: 8}).withMessage("Password: Se requieren al menos 8 caracteres."),
  body("phoneNumber")
    .trim()
    .notEmpty().withMessage("El campo teléfono está vacio")
    .isMobilePhone().withMessage("Formato teléfono incorrecto"),
  validationPatient
];