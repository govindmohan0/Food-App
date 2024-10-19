import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  try {
    res.json({ message: "Hello!" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(7000, () => {
  console.log("Server started on localhost:7000");
});
