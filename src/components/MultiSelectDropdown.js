import { useState } from "react";
import { Button } from "../ui/button";
//import { cn } from "../lib/utils";
import { X, Plus } from "lucide-react";

export default function MultiSelectDropdown({
  options: initialOptions,
  value,
  onChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState(initialOptions);
  const [newItem, setNewItem] = useState("");

  const handleAddNewItem = () => {
    if (newItem && !options.includes(newItem)) {
      setOptions([...options, newItem]);
      setNewItem("");
    }
  };

  return (
    <div className="relative w-full">
      <Button
        variant="outline"
        className="w-full justify-between min-h-[40px] h-auto py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-wrap gap-1">
          {value.length === 0 && "Select options..."}
          {value.map((v) => (
            <span
              key={v}
              className="inline-flex items-center px-2 py-1 bg-gray-100 rounded-md"
            >
              {v}
              <button
                type="button"
                className="ml-1 hover:text-red-500"
                onClick={(e) => {
                  e.stopPropagation();
                  onChange(value.filter((item) => item !== v));
                }}
              >
                <X className="w-4 h-4" />
              </button>
            </span>
          ))}
        </div>
      </Button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={value.includes(option)}
                onChange={() => {
                  onChange(
                    value.includes(option)
                      ? value.filter((v) => v !== option)
                      : [...value, option]
                  );
                }}
                className="mr-2"
              />
              {option}
            </label>
          ))}
          <div className="p-2 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Add new item"
                className="flex-1 px-2 py-1 border rounded"
              />
              <Button onClick={handleAddNewItem} disabled={!newItem}>
                <Plus className="w-4 h-4" />
                Add
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
