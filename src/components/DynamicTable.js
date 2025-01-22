import { useState } from "react";
import { Plus } from "lucide-react";
import SingleSelectDropdown from "./SingleSelectDropdown";
import MultiSelectDropdown from "./MultiSelectDropdown";
import { Button } from "../ui/button";

const initialSingleOptions = ["Option A", "Option B", "Option C", "Option D"];
const initialMultiOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];

export default function DynamicTable() {
  const [rows, setRows] = useState([
    { id: 1, singleValue: "", multiValue: [] },
  ]);

  const handleSingleSelectChange = (id, value) => {
    setRows(
      rows.map((row) => (row.id === id ? { ...row, singleValue: value } : row))
    );
  };

  const handleMultiSelectChange = (id, value) => {
    setRows(
      rows.map((row) => (row.id === id ? { ...row, multiValue: value } : row))
    );
  };

  const addNewRow = () => {
    const newId = Math.max(...rows.map((row) => row.id)) + 1;
    setRows([...rows, { id: newId, singleValue: "", multiValue: [] }]);
  };

  const usedOptions = rows.map((row) => row.singleValue).filter(Boolean);

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="rounded-lg border bg-white shadow">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="px-6 py-4 text-left">Label 1</th>
              <th className="px-6 py-4 text-left">Label 2</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b">
                <td className="px-6 py-4">
                  <SingleSelectDropdown
                    options={initialSingleOptions}
                    value={row.singleValue}
                    onChange={(value) =>
                      handleSingleSelectChange(row.id, value)
                    }
                    usedOptions={usedOptions}
                  />
                </td>
                <td className="px-6 py-4">
                  <MultiSelectDropdown
                    options={initialMultiOptions}
                    value={row.multiValue}
                    onChange={(value) => handleMultiSelectChange(row.id, value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 flex justify-end">
          <Button onClick={addNewRow} className="gap-2">
            <Plus className="w-4 h-4" />
            Add New Row
          </Button>
        </div>
      </div>
    </div>
  );
}
