import express from "express";
import { getPredictions, getResults } from "../controllers/mainController.js";

const router = express.Router({mergeParams: true});

router.get("/predictions", getPredictions);
router.get("/results", getResults);

export { router }