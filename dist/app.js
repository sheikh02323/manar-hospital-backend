"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const user_api_1 = require("./src/api/user.api");
const app = (0, express_1.default)();
exports.app = app;
// =====================
// Middlewares
// =====================
app.use(express_1.default.json());
// =====================
// Test Route (optional but useful)
// =====================
app.get("/", (req, res) => {
    res.send("Server is working 🚀");
});
// =====================
// Routes
// =====================
app.use("/users", user_api_1.userRouter);
