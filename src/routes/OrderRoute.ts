import express from "express";
import { jwtCheck, jwtparse } from "../middleware/auth";
import OrderController from "../controllers/OrderController";


const router = express.Router();

// router.get("/", jwtCheck, jwtparse, OrderController.getMyOrders);

router.post(
  "/checkout/create-checkout-session",
  jwtCheck,
  jwtparse,
  OrderController.createCheckoutSession
);

router.post("/checkout/webhook", OrderController.stripeWebhookHandler);

export default router;
