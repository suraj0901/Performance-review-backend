import { connect } from "mongoose";

async function connect_db() {
  try {
    const MONGO_DB_URI = process.env.MONGO_DB_URI;
    await connect(MONGO_DB_URI);
    console.log("Mongo db connected successfully");
  } catch (error) {
    console.error(error);
  }
}

export default connect_db;
