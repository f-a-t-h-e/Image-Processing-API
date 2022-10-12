import express from "express";
import { getImage } from "../controllers/images";
const router = express.Router();

router.route("/").get(getImage);

export default router;
