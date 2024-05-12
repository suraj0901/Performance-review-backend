import { body } from "express-validator";
import { requireMsg } from "./employee.validation";

const QuestionValidation = [
  body("title").notEmpty().isString().withMessage(requireMsg("Name")),
  body("email").notEmpty().isEmail().withMessage(requireMsg("Email")),
  body("gender")
    .notEmpty()
    .isIn([GENDER.MALE, GENDER.FEMALE, GENDER.OTHER])
    .withMessage(requireMsg("Gender")),
  body("profile").notEmpty().withMessage(requireMsg("Profile")),
];

export default QuestionValidation;
