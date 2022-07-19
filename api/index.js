import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.js";
import blogRoute from "./routes/blogs.js";
dotenv.config();

const app = express();

const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
  } catch (e) {
    console.log(e);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("Mongo Disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("Mongo Connected");
});

const corsOptions = {
  origin: "http://localhost:3000",
};

//Middleware
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

app.use("/auth", authRoute);
// app.use('/user', userRoute)
app.use("/blog", blogRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.get("/", (req, res) => {
  res.send("Blog API");
});

app.listen(process.env.PORT || "5000", () => {
  connect();
  console.log(`Backend running on PORT: 5000`);
});
