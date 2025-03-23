import Button from "@/components/Button";
import Img from "@/components/Img";
import startFarm from "@/public/illustration/start-create-farm.svg";

interface Props {
  next: () => void;
  handleBack: () => void;
}

const StartView: React.FC<Props> = ({ next, handleBack }) => {
  return (
    <div className="w-full h-full flex justify-between flex-col py-4 gap-4 items-center">
      <h3 className="font-bold">Set up your farm</h3>
      <p className="font-semibold text-n2">First, let’s locate your farm</p>
      <Img src={startFarm} alt="start farm" className="w-full h-full" />
      <Button
        label="Grant location access"
        handleClick={next}
        className=" !w-full"
        width={"full"}
      />
    </div>
  );
};

export default StartView;
