import React from "react";

interface StepperProps {
  totalDots: number;
  activeDot: number;
}

const Stepper: React.FC<StepperProps> = ({ totalDots, activeDot }) => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      {Array.from({ length: totalDots }, (_, index) => (
        <div
          key={index}
          className={`mx-1 rounded-full ${
            index === activeDot ? "bg-p1 w-6 h-1" : "bg-n2 w-3 h-1"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default Stepper;
