import { config } from "dotenv";
import express from "express";
import connect_db from "./config/connect_db.js";
import employeeRoute from "./routes/employee.route.js";
import feedback_route from "./routes/feedback.route.js";
import question_route from "./routes/question.route.js";
import reviewRoute from "./routes/review.route.js";
import cors from "cors";
// import upload from "multer";

config();
await connect_db();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(upload().any())

app.get("/hello-world", (_request, response) => {
  response.json({
    message: "Hello world",
  });
});

app.use("/employee", employeeRoute);
app.use("/review", reviewRoute);
app.use("/question", question_route);
app.use("/feedback", feedback_route);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
