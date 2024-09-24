import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";

import { connectDB } from "./config/db.config.js";
import todoRoutes from "./routes/todo.route.js"

import dotenv from "dotenv";
dotenv.config();

connectDB();

const app = express();

app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", todoRoutes);

const PORT = process.env.PORT

app.listen(3000, "localhost", (error) => {
  if (!error) {
    console.log("Server listening successfully on port", PORT);
  }
})
