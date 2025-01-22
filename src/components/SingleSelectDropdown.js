import { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "../lib/utils";

export default function SingleSelectDropdown({
  options,
  value,
  onChange,
  usedOptions,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const availableOptions = options.filter(
    (option) => !usedOptions.includes(option) || option === value
  );

  return (
    <div className="relative w-full">
      <Button
        variant="outline"
        className="w-full justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value || "Select option..."}
      </Button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
          {availableOptions.map((option) => (
            <div
              key={option}
              className={cn(
                "px-4 py-2 cursor-pointer hover:bg-gray-100",
                value === option && "bg-gray-100"
              )}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
