"use client";
import withUpdateFarmController from "./withUpdateFarmController";
import { UpdateFarmViewType } from "./types";
import TransitionGroupLayout from "@/components/TransitionGroupLayout";
import Stepper from "@/components/Steper/Steper";

const UpdateFarmView: UpdateFarmViewType = ({
  activeDot,
  animationType,
  renderCurrentView,
  totalDots,
}) => {
  return (
    <main className="w-screen overflow-hidden h-screen flex p-4  py-8 flex-col items-center gap-6 ">
      <TransitionGroupLayout
        animationType={animationType}
        transitionGroupKey={activeDot ?? 0}
      >
        <div className="w-full h-full flex-1 flex flex-col gap-4">
          <div className="h-fit">
            <Stepper activeDot={activeDot} totalDots={totalDots} key={1} />
          </div>

          <div className="w-full h-full over">{renderCurrentView()}</div>
        </div>
      </TransitionGroupLayout>
    </main>
  );
};

export default withUpdateFarmController(UpdateFarmView);
