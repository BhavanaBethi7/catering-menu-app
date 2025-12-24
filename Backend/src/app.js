import express from "express";
import cors from "cors";
import menuRoutes from "./routes/menuRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/menu", menuRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Catering backend is running");
});

export default app;
