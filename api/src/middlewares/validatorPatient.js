const { validationResult, body, param } = require("express-validator");

const validationPatient = (req, res, next) => { 
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
const paramIdPatientValidator = [
  param("idPatient", "Formato de ID incorrecto")
    .trim()
    .notEmpty()
    .escape(),
    validationPatient
];
const bodyPatientValidatorPOST = [
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
const bodyPatientValidatorPATCH = [
  body("name")
    .trim()
    .notEmpty().withMessage("El campo nombre está vacio")
    .optional({nullable: true, checkFalsy: true}),
  body("email")
    .trim()
    .notEmpty().withMessage("El campo email está vacio")
    .isEmail().withMessage("Formato de email incorrecto")
    .normalizeEmail()
    .optional({nullable: true, checkFalsy: true}),
  body("password")
    .trim()
    .notEmpty().withMessage("El campo password está vacio")
    .isLength({min: 8}).withMessage("Password: Se requieren al menos 8 caracteres.")
    .optional({nullable: true, checkFalsy: true}),
  body("phoneNumber")
    .trim()
    .notEmpty().withMessage("El campo teléfono está vacio")
    .isMobilePhone().withMessage("Formato teléfono incorrecto")
    .optional({nullable: true, checkFalsy: true}),
  validationPatient
];

module.exports = {
  paramIdPatientValidator,
  bodyPatientValidatorPOST,
  bodyPatientValidatorPATCH
}