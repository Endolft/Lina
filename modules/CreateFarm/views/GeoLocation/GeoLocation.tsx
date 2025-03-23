import { useState } from "react";
import FarmSelection from "../../components/FarmMap";
import Button from "@/components/Button";

interface Props {
  next: () => void;
  handleBack: () => void;
}

const GeoLocation: React.FC<Props> = ({ next, handleBack }) => {
  const [selectedPoints, setSelectedPoints] = useState<
    { x: number; y: number }[]
  >([]);

  const handleSelection = (points: { x: number; y: number }[]) => {
    console.log("Puntos seleccionados:", points);
    setSelectedPoints(points);
  };

  return (
    <div className="flex flex-col items-center h-full  gap-4 !w-full py-4 justify-center overflow-hidden relative">
      <h3 className=" font-bold mb-4">Select Farm Area</h3>
      <div className="bg-n10 rounded-md  top-12 p-2 shadow-e4 ">
        <h6 className="text-n2">Tap a corner to set the perimeter </h6>
      </div>
      <FarmSelection onSelection={handleSelection} />
      <Button
        handleClick={next}
        disabled={selectedPoints.length !== 4}
        label="Set farm location
"
        className="!w-10/12 "
      />

      <Button
        className="!w-10/12"
        handleClick={handleBack}
        variant="secondary"
        label="Back"
      />
    </div>
  );
};

export default GeoLocation;
