import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtparse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router();

// /api/my/user
router.get("/", jwtCheck, jwtparse, MyUserController.getCurrentUser);

// /api/my/user
router.post("/", jwtCheck, MyUserController.createCurrentUser); // Create a new user (log in)
router.put(
  "/", 
  jwtCheck, 
  jwtparse,
  validateMyUserRequest,  
  MyUserController.updateCurrentUser
);

export default router;