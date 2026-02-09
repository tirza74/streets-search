import * as XLSX from "xlsx";
import { insertData } from "./elastic";
import fs from "fs";
import path from "path";

// נתיב לקובץ Excel
const filePath = path.join(__dirname, "../data/מטלת בית ארכיון שמות רחובות (1).xlsx");

export const loadExcelData = async () => {
  if (!fs.existsSync(filePath)) {
    console.error("קובץ לא נמצא:", filePath);
    return;
  }

  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0]; // לוקח את הגיליון הראשון
  const sheet = workbook.Sheets[sheetName];

  const jsonData: any[] = XLSX.utils.sheet_to_json(sheet);

  // מוסיפים שדה deleted לכל רשומה
  const preparedData = jsonData.map(row => ({ ...row, deleted: false }));

  await insertData(preparedData);
  console.log("Excel data uploaded to Elasticsearch successfully!");
};
