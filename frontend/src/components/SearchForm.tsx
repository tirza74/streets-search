import React, { useState } from "react";
import axios from "axios";
import RecordTable from "./RecordTable";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const [field, setField] = useState("name");
  const [results, setResults] = useState<any[]>([]);

  const search = async () => {
    const res = await axios.get("http://localhost:3001/api/records/search", { params: { query, field } });
    setResults(res.data);
  };

  const deleteRecord = async (id: string) => {
    await axios.post(`http://localhost:3001/api/records/delete/${id}`);
    setResults(results.filter(r => r.id !== id));
  };

  return (
    <div>
      <div>
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="חפש..." />
        <div>
          <label>
            <input type="radio" value="name" checked={field === "name"} onChange={() => setField("name")} />
            שם ראשי
          </label>
          <label>
            <input type="radio" value="city" checked={field === "city"} onChange={() => setField("city")} />
            עיר
          </label>
        </div>
        <button onClick={search}>חפש</button>
      </div>
      <RecordTable records={results} deleteRecord={deleteRecord} />
    </div>
  );
};

export default SearchForm;
