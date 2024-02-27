"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
// import mongoose from "mongoose";
const MyUserRoute_1 = __importDefault(require("./routes/MyUserRoute"));
// import { v2 as cloudinary } from "cloudinary";
// import myRestaurantRoute from "./routes/MyRestaurantRoute";
// import restaurantRoute from "./routes/RestaurantRoute";
// import orderRoute from "./routes/OrderRoute";
mongoose_1.default;
const connectionString = process.env.MONGODB_CONNECTION_STRING;
if (!connectionString) {
    throw new Error("MONGODB_CONNECTION_STRING is not defined");
}
mongoose_1.default
    .connect(connectionString)
    .then(() => console.log("Connected to database"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//deployment
app.get("/health", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send({ message: "health OK!" });
}));
// /api/my/user
app.use("/api/my/user", MyUserRoute_1.default);
app.listen(7000, () => {
    console.log("server started on localhost:7000");
});
