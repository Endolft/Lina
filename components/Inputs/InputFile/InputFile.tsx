import React, { useState } from "react";
import iconUpload from "@/public/assets/icon_upload.svg";
import Img from "../../Img";
import LoadingSpinner from "../../LoadingSpinner";

interface FileInputProps {
  label?: string;
  name: string;
  value: string;
  isDisabled?: boolean;
  handleChange: (e: { target: { value: any; name?: string } }) => void;
}

const InputFile: React.FC<FileInputProps> = ({
  label,
  name,
  value,
  isDisabled = false,
  handleChange,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectFile = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (isDisabled) return;

    if (event.target.files && event.target.files[0]) {
      setIsLoading(true);
      const selectedFile = event.target.files[0];

      const convertToBase64 = (file: File): Promise<string> =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = (error) => reject(error);
        });

      const base64File = await convertToBase64(selectedFile);
      setFile(selectedFile);

      handleChange({
        target: {
          name,
          value: base64File,
        },
      });

      setIsLoading(false);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    handleChange({
      target: {
        name,
        value: "",
      },
    });
  };

  return (
    <div className="w-full h-[4.75rem] relative flex flex-col">
      {label && (
        <span className="block text-sm text-left text-n6 px-s">{label}</span>
      )}
      <div
        className={`flex items-center gap-2 h-full border border-n10 rounded-sm w-full shadow-sm text-n6 text-left cursor-pointer justify-between px-l sm:text-sm ${
          isDisabled
            ? "bg-transparent border-n2 text-n2 cursor-not-allowed opacity-50"
            : ""
        }`}
      >
        <label
          htmlFor={`file-input-${name}`}
          className="flex items-center w-full cursor-pointer"
        >
          <span className="text-gray-600 text-sm truncate pr-2">
            {file?.name || (value ? "Archivo cargado" : "Seleccionar archivo")}
          </span>
        </label>

        <div className="flex items-center">
          {isLoading ? (
            <LoadingSpinner size={"24px"} />
          ) : file || value ? (
            <button
              type="button"
              onClick={handleRemoveFile}
              className="flex items-center justify-center w-6 h-6 rounded-full text-n3"
              disabled={isDisabled}
            >
              ✕
            </button>
          ) : (
            <Img src={iconUpload} alt="Subir archivo" className="w-4 h-4" />
          )}
        </div>
      </div>

      <input
        type="file"
        id={`file-input-${name}`}
        className="hidden"
        onChange={handleSelectFile}
        disabled={isDisabled}
      />
    </div>
  );
};

export default InputFile;
