import { body, validationResult } from "express-validator";

export const todoValidation = () => {
  return [
    body("name").notEmpty().withMessage("Name is required"),
    body("description").notEmpty().withMessage("Date is required"),
    body("dateTime").isISO8601().withMessage("Date & Time must be valid"),
  ];
};

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};
