import { Router } from "express";
import EmployeeController from "../controllers/employee.controller.js";
import convert_image_to_base64_string from "../middleware/convert_image_to_base64_string.js";

const employeeRoute = Router();

employeeRoute
  .route("/")
  .get(EmployeeController.get_all_employees)
  .post(convert_image_to_base64_string, EmployeeController.create_employee);

employeeRoute
  .route("/:id")
  .get(EmployeeController.get_employee_by_id)
  .put(EmployeeController.update_employee)
  .delete(EmployeeController.delete_employee);

export default employeeRoute;
