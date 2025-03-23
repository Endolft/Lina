import React from "react";
import Img from "@/components/Img";
import Button from "@/components/Button";

interface OnboardingStepProps {
  img: string;
  title: string;
  subtitle: string;
  handleContinue: () => void;
}

const OnboardingStep: React.FC<OnboardingStepProps> = ({
  img,
  title,
  subtitle,
  handleContinue,
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-6  animate__animated animate__fadeInRight">
      <div className="flex-1 flex flex-col justify-center items-center gap-6">
        <Img src={img} alt={title} className="w-full max-w-sm" />
        <div className="w-full text-center flex flex-col gap-3">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-500">{subtitle}</p>
        </div>
      </div>
      <Button className="!w-full" onClick={handleContinue} label="Next" />
    </div>
  );
};

export default OnboardingStep;
