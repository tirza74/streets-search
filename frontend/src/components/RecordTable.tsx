import React from "react";

interface Props {
  records: any[];
  deleteRecord: (id: string) => void;
}

const RecordTable: React.FC<Props> = ({ records, deleteRecord }) => {
  return (
    <table>
      <thead>
        <tr>
          {records[0] &&
            Object.keys(records[0])
              .filter(key => key !== "deleted" && key !== "id")
              .slice(0, 6)
              .map(key => <th key={key}>{key}</th>)}
          <th>פעולה</th>
        </tr>
      </thead>
      <tbody>
        {records.map((r, i) => (
          <tr key={i}>
            {Object.keys(r)
              .filter(key => key !== "deleted" && key !== "id")
              .slice(0, 6)
              .map(key => (
                <td key={key}>{r[key]}</td>
              ))}
            <td>
              <button onClick={() => deleteRecord(r.id)}>מחיקה</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecordTable;
