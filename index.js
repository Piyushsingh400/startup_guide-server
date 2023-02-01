import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.routes.js";
import authRoute from "./routes/auth.routes.js";
import cors from "cors";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 8080;


mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT} `);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });

app.use(express.json());
app.use(cors());
app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);

app.listen(4000, () => {
  console.log("Server started at port 4000");
});