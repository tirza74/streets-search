import express from "express";
import { client } from "../elastic";
const router = express.Router();
const index = process.env.ELASTIC_INDEX!;

// חיפוש
router.get("/search", async (req, res) => {
  const { query, field } = req.query;
  if (!query) return res.status(400).send({ error: "Query missing" });

  const searchQuery: any = {
    index,
    body: {
      query: {
        bool: {
          must: [
            { match: { [field || "name"]: query } },
            { term: { deleted: false } }
          ]
        }
      }
    }
  };

  const result = await client.search(searchQuery);
  const hits = result.hits.hits.map(hit => ({ ...hit._source, id: hit._id }));
  res.json(hits);
});

// מחיקה לוגית
router.post("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await client.update({
    index,
    id,
    body: { doc: { deleted: true } }
  });
  res.json({ success: true });
});

export default router;
