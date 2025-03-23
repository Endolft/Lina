import React from "react";
import farmCreatedImg from "@/public/illustration/farm-created.svg";
import Img from "@/components/Img";
import ProgressBar from "@/components/ProgressBar";
import Button from "@/components/Button";
import { useRouter } from "next/router";

interface SummaryViewProps {
  next: () => void;
  handleBack: () => void;
}

const SummaryView = ({ next, handleBack }: SummaryViewProps) => {
  const handleNext = () => {
    localStorage.setItem("newLoad", "true");
    next();
  };
  return (
    <div className="h-full !w-full flex flex-col gap-4 items-center ">
      <h3 className="font-bold">You’ve upgraded your farm!</h3>
      <div className="w-full flex  items-center justify-center flex-1 flex-col gap-4">
        <Img src={farmCreatedImg} alt="created" />
        <div className="w-full">
          <h1 className="font-bold  text-5xl text-right w-full">
            8.4<span className="h4 text-n2">/10</span>
          </h1>
          <ProgressBar status={0.84} />
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 items-center">
        <p className="text-n3 font-bold">Now, you can access better loans</p>
        <Button
          handleClick={handleNext}
          label="I want to see my new options"
          className="!w-10/12"
        />
      </div>
    </div>
  );
};

export default SummaryView;
