import Button from "@/components/Button";
import InputFile from "@/components/Inputs/InputFile";
import React, { useState } from "react";

type FormType = {
  soil: string;
  chlorophyll: string;
  ph: string;
  irrigation: string;
};

const INPUTS: { name: keyof FormType; label: string }[] = [
  { name: "soil", label: "Upload Soil analysis" },
  { name: "chlorophyll", label: "Chlorophyll analysis" },
  { name: "ph", label: "pH analysis" },
  { name: "irrigation", label: "Irrigation system map" },
];

interface UploadFilesViewProps {
  next: () => void;
  handleBack: () => void;
}

const UploadFilesView: React.FC<UploadFilesViewProps> = ({
  next,
  handleBack,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState<FormType>({
    soil: "",
    chlorophyll: "",
    ph: "",
    irrigation: "",
  });

  const handleNext = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      next();
    }, 4000);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="h-full !w-full flex flex-col gap-4 items-center ">
      <h3 className="font-bold">Upgrade your farm</h3>
      <div>
        <p className="text-n3">Complete your farm data</p>
        <p className="text-n3">
          to <span className="font-bold">access better loans.</span>
        </p>
      </div>
      <div className="w-full flex flex-1 flex-col gap-4">
        {INPUTS.map((input) => (
          <InputFile
            key={input.name}
            name={input.name}
            value={form[input.name]}
            label={input.label}
            handleChange={(e: any) =>
              setForm({ ...form, [input.name]: e.target.value })
            }
          />
        ))}
      </div>
      <div className="w-full flex flex-col gap-4 items-center">
        <Button
          handleClick={handleNext}
          label="Upgrade my farm"
          className="!w-10/12"
          disabled={Object.values(form).some((value) => value === "")}
        />
        <Button
          className="!w-10/12"
          handleClick={handleBack}
          variant="secondary"
          label="Maybe later"
        />
      </div>
    </div>
  );
};

export default UploadFilesView;
