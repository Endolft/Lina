import Card from "@/components/Card";
import ChevronIcon from "@/components/ChevronIcon";
import ProgressBar from "@/components/ProgressBar";
import UpdateFarmButton from "../UpdateFarmButton";
interface Props {}

const CardScore: React.FC<Props> = () => {
  return (
    <Card
      rounded="md"
      className="bg-n0 !gap-4 flex flex-col border-2 !border-[#233923]"
      shadow="e3"
      padding="xl"
    >
      <div className="w-full flex justify-between items-center">
        <h6 className=" font-bold">My farm</h6>
        <ChevronIcon size="small" color="#bfbfbf" type="right" />
      </div>
      <div>
        <h1 className="font-bold  text-5xl text-right w-full">
          3.1<span className="h4 text-n2">/10</span>
        </h1>
        <ProgressBar status={0.31} />
      </div>
      <p className="text-n3 w-full text-right my-2">
        Next loan option at score 5.5
      </p>
      <div className="w-full flex items-end justify-end">
        <UpdateFarmButton />
      </div>
    </Card>
  );
};

export default CardScore;
