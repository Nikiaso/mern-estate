import express from "express";
import colors from "colors";
import { connectDB } from "./config/db.js";
connectDB();
const app = express();

app.listen(3000, () => {
  console.log(`Server is listening on port 3000...`.yellow.bold);
});
