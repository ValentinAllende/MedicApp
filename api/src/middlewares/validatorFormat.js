const { validationResult } = require("express-validator");

const validationFormat = (req, res, next) => { 
  const errorFormatter = ({ msg, param }) => {
    return {[param]: msg};
  };
  const errors = validationResult(req).formatWith(errorFormatter);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = validationFormat;
