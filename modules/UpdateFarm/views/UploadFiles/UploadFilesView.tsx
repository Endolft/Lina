import InputFile from "@/components/Inputs/InputFile";
import React, { useState } from "react";

// Definimos correctamente el tipo del formulario
type FormType = {
  soil: string;
  chlorophyll: string;
  ph: string;
  irrigation: string;
};

// Arreglo con los nombres de los inputs correctamente tipados
const INPUTS: { name: keyof FormType }[] = [
  { name: "soil" },
  { name: "chlorophyll" },
  { name: "ph" },
  { name: "irrigation" },
];

const UploadFilesView: React.FC = () => {
  const [form, setForm] = useState<FormType>({
    soil: "",
    chlorophyll: "",
    ph: "",
    irrigation: "",
  });

  return (
    <div>
      <h3 className="font-bold">Upgrade your farm</h3>
      <p>Complete your farm data</p>
      <p>
        to <span className="font-bold">access better loans.</span>
      </p>
      <div>
        {INPUTS.map((input) => (
          <InputFile
            key={input.name}
            name={input.name}
            value={form[input.name]}
            handleChange={(e: any) =>
              setForm((prev) => ({
                ...prev,
                [input.name]: e.target.value,
              }))
            }
          />
        ))}
      </div>
    </div>
  );
};

export default UploadFilesView;
