import express from "express";
import mainRouter from "mainRouter.js";

const router = express.Router({mergeParams: true});

router.use("/", mainRouter);

export { router }
