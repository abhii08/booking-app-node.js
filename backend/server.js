import express from "express";
import cors from "cors";
import connectDB from "./dbConnection.js";
import router from "./routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// connect database
connectDB();

// mount routes
app.use("/api", router);

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});