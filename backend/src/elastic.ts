import { Client } from "@elastic/elasticsearch";
import dotenv from "dotenv";
dotenv.config();

export const client = new Client({ node: process.env.ELASTIC_URL });

export const createIndex = async () => {
  const indexExists = await client.indices.exists({ index: process.env.ELASTIC_INDEX });
  if (!indexExists) {
    await client.indices.create({
      index: process.env.ELASTIC_INDEX,
      body: {
        mappings: {
          properties: {
            name: { type: "text" },
            city: { type: "text" },
            type: { type: "text" },
            code: { type: "keyword" },
            deleted: { type: "boolean" }
          }
        }
      }
    });
    console.log("Index created");
  }
};

export const insertData = async (data: any[]) => {
  const body = data.flatMap(doc => [{ index: { _index: process.env.ELASTIC_INDEX } }, doc]);
  const { body: bulkResponse } = await client.bulk({ refresh: true, body });
  if (bulkResponse.errors) {
    console.error("Error inserting data");
  } else {
    console.log("Data inserted successfully");
  }
};
