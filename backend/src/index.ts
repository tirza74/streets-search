import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import recordsRouter from "./routes/records";
import { createIndex } from "./elastic";
import { loadExcelData } from "./loadExcel";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/records", recordsRouter);

const port = process.env.PORT || 3001;

app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
  await createIndex();
  await loadExcelData();
});
