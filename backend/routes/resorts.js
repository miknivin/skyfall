import express from "express";
import { getAllResorts, getResortById } from "../controllers/propertiesController.js";

const router = express.Router();

router.route("/resorts").get(getAllResorts);
router.route("/resorts/:id").get(getResortById);
export default router;
