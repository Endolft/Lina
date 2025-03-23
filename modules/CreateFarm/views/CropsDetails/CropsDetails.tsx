import Button from "@/components/Button";
import InputDropdown from "@/components/Inputs/InputDropdown";

interface Props {
  next: () => void;
  handleBack: () => void;
}

// Mock de datos para los dropdowns
const cropOptions = [
  { label: "Maize", value: "maize" },
  { label: "Wheat", value: "wheat" },
  { label: "Potato", value: "potato" },
];

const linesOptions = [
  { label: "Single row", value: "single" },
  { label: "Double row", value: "double" },
  { label: "Multiple rows", value: "multiple" },
];

const rowsOptions = [
  { label: "5 Rows", value: "5" },
  { label: "10 Rows", value: "10" },
  { label: "15 Rows", value: "15" },
];

const disabledInputs = [
  {
    name: "crop",
    value: "potato",
    inputLabel: "Crop type",
    options: cropOptions,
  },
  {
    name: "lines",
    value: "single",
    inputLabel: "Crop lines",
    options: linesOptions,
  },
  { name: "rows", value: "5", inputLabel: "Crop rows", options: rowsOptions },
];

const CropsDetails: React.FC<Props> = ({ handleBack, next }) => {
  return (
    <div className="!w-full h-full flex flex-col gap-6 py-4 items-center">
      <div className="flex flex-col text-center">
        <h3 className=" font-bold">Set up your farm</h3>
        <h6 className="text-n3">Now, let’s complete your crop data</h6>
      </div>
      <div className="flex-1 w-full flex flex-col gap-4">
        {disabledInputs.map((input) => (
          <InputDropdown
            key={input.name}
            name={input.name}
            value={input.value}
            handleChange={() => {}}
            isDisabled
            inputLabel={input.inputLabel}
            options={input.options}
          />
        ))}
      </div>
      <div className="w-full flex flex-col gap-4 items-center">
        <Button handleClick={next} label="Next" className="!w-10/12 " />

        <Button
          className="!w-10/12"
          handleClick={handleBack}
          variant="secondary"
          label="Back"
        />
      </div>
    </div>
  );
};

export default CropsDetails;
