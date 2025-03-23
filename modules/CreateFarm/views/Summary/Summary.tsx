import Button from "@/components/Button";
import Img from "@/components/Img";
import farmCreatedImg from "@/public/illustration/farm-created.svg";
interface Props {
  next: () => void;
  handleBack: () => void;
}
const Summary: React.FC<Props> = ({ next }) => {
  return (
    <div className="w-full h-full flex-1 flex-col gap-4 flex items-center justify-center">
      <div className="flex-1 flex flex-col items-center  gap-4 justify-center">
        <Img src={farmCreatedImg} alt="Farm Created" />
        <div className="flex flex-col text-center gap-2">
          <h2 className="text-xl font-bold">Set up your farm</h2>
          <h6 className="text-n3">Finally, set your quality control</h6>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 items-center">
        <Button handleClick={next} label="Great" className="!w-10/12 " />
      </div>
    </div>
  );
};

export default Summary;
