import mongoose from "mongoose";

const EmployeeModel = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true,
  },
  profile: {
    type: String,
    required: true,
  },
});

export default EmployeeModel;
