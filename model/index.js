import { model } from "mongoose";
import EmployeeModel from "./employee.model.js";
import FeedbackModal from "./feedback.mode.js";
import QuestionModal from "./question.model.js";
import ReviewModal from "./review.model.js";

export const Employee = model("Employee", EmployeeModel);
export const Feedback = model("Feedback", FeedbackModal);
export const Question = model("Question", QuestionModal);
export const Review = model("Review", ReviewModal);
