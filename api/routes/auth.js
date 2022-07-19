import express from "express";
import { signIn, signUp, signOut } from "../controllers/auth.js";

const router = express.Router();

router.post("/signIn", signIn);
router.post("/signUp", signUp);
router.get("/signOut", signOut);

export default router;
