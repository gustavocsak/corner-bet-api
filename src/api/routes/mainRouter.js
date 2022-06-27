import express from "express";
import controllers from "../controllers/mainController.js";

const router = express.Router({mergeParams: true});

router.get("/predictions", controllers.getPredictions);
router.get("/results", controllers.getResults);

export default router