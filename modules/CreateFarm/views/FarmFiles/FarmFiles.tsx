import Button from "@/components/Button";
import InputFile from "@/components/Inputs/InputFile";

interface Props {
  next: () => void;
  handleBack: () => void;
}
const FarmFiles: React.FC<Props> = ({ next, handleBack }) => {
  return (
    <div className="!w-full h-full flex flex-col py-4 gap-8 items-center">
      <div className="flex flex-col text-center">
        <h3 className=" font-bold">Set up your farm</h3>
        <h6 className="text-n3">Finally, set your quality control</h6>
      </div>
      <div className="flex flex-col gap-4 flex-1 w-full">
        <InputFile
          handleChange={() => {}}
          name=""
          value="example"
          isDisabled
          label="Upload property title"
        />
        <InputFile
          handleChange={() => {}}
          name=""
          value="example"
          isDisabled
          label="Upload possession certificate (if applicable)"
        />
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

export default FarmFiles;
