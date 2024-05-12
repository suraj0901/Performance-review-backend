import { Employee } from "../model/index.js";

class EmployeeController {
  /**
   * @type {import("express").RequestHandler}
   */
  static async create_employee(request, response) {
    try {
      const employee = new Employee(request.body);
      await employee.save();
      response.send(employee);
    } catch (error) {
      response.status(500).send(error);
    }
  }

  /**
   * @type {import("express").RequestHandler}
   */
  static async get_all_employees(_request, response) {
    try {
      const employees = await Employee.find();
      response.send(employees);
    } catch (error) {
      response.status(500).send(error);
    }
  }

  /**
   * @type {import("express").RequestHandler}
   */
  static async get_employee_by_id(request, response) {
    try {
      const id = request.params.id;
      const employee = await Employee.findById(id);
      response.send(employee);
    } catch (error) {
      response.status(500).send(error);
    }
  }

  /**
   * @type {import("express").RequestHandler}
   */
  static async update_employee(request, response) {
    try {
      const id = request.params.id;
      const employee = await Employee.findOneAndUpdate(
        { _id: id },
        request.body
      );
      response.send(employee);
    } catch (error) {
      response.status(500).send(error);
    }
  }

  /**
   * @type {import("express").RequestHandler}
   */
  static async delete_employee(request, response) {
    try {
      const id = request.params.id;
      const employee = await Employee.findOneAndDelete(id);
      if (!employee) response.status(404).send("No item found");
      response.status(200).send(employee);
    } catch (error) {
      response.status(500).send(error);
    }
  }
}

export default EmployeeController;
