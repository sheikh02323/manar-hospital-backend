import express from "express";
import { userRouter } from "./src/api/user.api";

const app = express();

// =====================
// Middlewares
// =====================
app.use(express.json());

// =====================
// Test Route (optional but useful)
// =====================
app.get("/", (req, res) => {
  res.send("Server is working 🚀");
});

// =====================
// Routes
// =====================
app.use("/users", userRouter);

// =====================
// Export app
// =====================
export { app };
