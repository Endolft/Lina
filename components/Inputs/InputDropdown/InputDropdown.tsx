import { useRef, useState, FC, MouseEvent } from "react";
import ChevronIcon from "../../ChevronIcon";

interface Option {
  label: string;
  value: string | number;
  isEnabled?: boolean;
  icon?: string;
  required?: boolean;
  name?: string;
}

interface InputDropdownProps {
  handleChange: (e: {
    target: { value: any; name?: string; selectedValue?: any };
  }) => void;
  value: any;
  className?: string;
  isDisabled?: boolean;
  placeholder?: string;
  options: Option[];
  multiple?: boolean;
  errorMessage?: string;
  inputLabel?: string;
  required?: boolean;
  name?: string;
}

const InputDropdown: FC<InputDropdownProps> = ({
  handleChange,
  value,
  className = "",
  isDisabled = false,
  placeholder = "",
  options,
  multiple = false,
  errorMessage = "",
  inputLabel = "",
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleSelect = (e: MouseEvent<HTMLDivElement>, newValue: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (multiple) {
      const newVal = value.includes(newValue)
        ? value.filter((v: any) => v !== newValue)
        : [...value, newValue];
      handleChange({
        target: {
          value: newVal,
          name: "selectedOption",
          selectedValue: newValue,
        },
      });
    } else {
      handleChange({ target: { value: newValue } });
      setShowOptions(false);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowOptions(!showOptions);
  };

  const displayValue = multiple
    ? value.length
    : options.find((option) => option.value === value)?.label;

  return (
    <div className={`${className} w-full h-[4.75rem]  relative flex flex-col`}>
      {inputLabel && (
        <span className="block text-sm  w-full  text-left text-n6 px-s">
          {inputLabel}
        </span>
      )}
      <button
        ref={buttonRef}
        className={`flex items-center gap-2 h-full  border-n10 border rounded-sm w-full shadow-sm text-n6 text-left cursor-default justify-between px-l sm:text-sm ${
          isDisabled ? "bg-transparent border-n2 text-n2" : ""
        }`}
        disabled={isDisabled}
        onClick={(e) => handleClick(e)}
      >
        {displayValue || placeholder || inputLabel}
        <ChevronIcon size="small" type="down" />
      </button>
      {errorMessage && (
        <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
      )}
      {showOptions && (
        <div
          className="absolute z-50 mt-1 w-full rounded-md !border-n5 bg-white shadow-lg max-h-60 overflow-auto"
          style={{ top: "100%" }}
        >
          {options.map((option) => (
            <div
              key={option.value}
              className={`cursor-pointer select-none relative p-2 ${
                value === option.value ? "text-white bg-p1" : "text-n6"
              }`}
              onClick={(e) => handleSelect(e, option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InputDropdown;
