import Button from "@/components/Button";
import InputDropdown from "@/components/Inputs/InputDropdown";

const machineryOptions = [
  {
    name: "tractors",
    value: "no",
    inputLabel: "Do you have tractors?",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "irrigation",
    value: "no",
    inputLabel: "Do you have automated irrigation systems?",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "irrigationType",
    value: "none",
    inputLabel: "If you have, What kind?",
    options: [
      { label: "Drip", value: "drip" },
      { label: "Sprinkler", value: "sprinkler" },
      { label: "None", value: "none" },
    ],
  },
  {
    name: "harvesters",
    value: "no",
    inputLabel: "Do you have harvesters?",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
];

interface Props {
  next: () => void;
  handleBack: () => void;
}

const AvailableTools: React.FC<Props> = ({ next, handleBack }) => {
  return (
    <div className="!w-full h-full flex flex-col  py-4 gap-6 items-center">
      <div className="flex flex-col text-center">
        <h3 className="font-bold">Set up your farm</h3>
        <h6 className="text-n3">Now, let’s set your enginery</h6>
      </div>
      <div className="flex-1 w-full flex flex-col gap-4">
        {machineryOptions.map((input) => (
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

export default AvailableTools;
