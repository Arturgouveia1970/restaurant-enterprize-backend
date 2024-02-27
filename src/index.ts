import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
// import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";
// import { v2 as cloudinary } from "cloudinary";
// import myRestaurantRoute from "./routes/MyRestaurantRoute";
// import restaurantRoute from "./routes/RestaurantRoute";
// import orderRoute from "./routes/OrderRoute";

mongoose
  const connectionString = process.env.MONGODB_CONNECTION_STRING as string;
  if (!connectionString) {
    throw new Error("MONGODB_CONNECTION_STRING is not defined");
  }
  mongoose
    .connect(connectionString) 
  .then(() => console.log("Connected to database"));

const app = express();
app.use(express.json());
app.use(cors());

//deployment
app.get("/health", async (req: Request, res:Response) => {
  res.send({ message: "health OK!" });
})

// /api/my/user
app.use("/api/my/user", myUserRoute)

app.listen(7000, () => {
  console.log("server started on localhost:7000");
});