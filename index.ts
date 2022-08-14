//imports
import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import AppRouter from "./src/routes/AppRoutes";

//env configuration
dotenv.config();

//config express app
const app: Express = express();

// cross-origin error handling configuration
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

//config body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static folder
app.use(express.static("public"));

app.use(AppRouter);

//run server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
