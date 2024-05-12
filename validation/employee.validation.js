import { body } from "express-validator";
export const requireMsg = (field) => `${field} is require`;

const GENDER = {
  MALE: "MALE",
  FEMALE: "FEMALE",
  OTHER: "OTHER",
};

const EmployeeValidation = [
  body("name").notEmpty().isString().withMessage(requireMsg("Name")),
  body("email").notEmpty().isEmail().withMessage(requireMsg("Email")),
  body("gender")
    .notEmpty()
    .isIn([GENDER.MALE, GENDER.FEMALE, GENDER.OTHER])
    .withMessage(requireMsg("Gender")),
  body("profile").notEmpty().withMessage(requireMsg("Profile")),
];

export default EmployeeValidation;
