import express, { Router } from "express";
import MapController from "../controllers/MapController";

const AppRouter: Router = express.Router();

AppRouter.post("/", MapController.GenerateRandomLocations);

export default AppRouter;
