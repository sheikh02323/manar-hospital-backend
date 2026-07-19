import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/mongodb.config";
import { userRouter } from "./src/api/user.api"; // ✅ Use lowercase 'userRouter'

dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use("/users", userRouter); // ✅ Now this matches

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
