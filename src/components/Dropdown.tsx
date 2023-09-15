import React, { useState } from "react";
import { RecipesModel } from "../constant/recipes";

interface DropdownProps {
  options: (string | RecipesModel)[];
  onSelect: (selectedOption: string, name: string) => void;
  name: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string | RecipesModel) => {
    if (typeof option === "string") {
      setSelectedOption(option);
      onSelect(option, name);
    } else {
      setSelectedOption(option.value);
      onSelect(option.id, name);
    }
    setIsOpen(false);
  };

  return (
    <div className="inline-block text-left w-full relative p-2 border border-border-grey rounded-md mt-2 pr-10">
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-full rounded-md shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption || "Select an option"}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right w-full absolute left-0 mt-2 z-50 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                role="menuitem"
              >
                {typeof option === "string" ? option : option.value}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
