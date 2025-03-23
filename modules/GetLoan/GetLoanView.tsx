"use client";
import withGetLoanController from "./withGetLoanController";
import { GetLoanViewType } from "./types";
import TransitionGroupLayout from "@/components/TransitionGroupLayout";
import Steper from "@/components/Steper";

const GetLoanView: GetLoanViewType = ({
  activeDot,
  animationType,
  renderCurrentView,
  totalDots,
}) => {
  return (
    <main className="w-screen overflow-hidden h-screen flex p-4  flex-col items-center gap-6 ">
      <TransitionGroupLayout
        animationType={animationType}
        transitionGroupKey={activeDot ?? 0}
      >
        <div className="w-full h-full flex-1">
          {activeDot + 1 !== totalDots && (
            <div className="h-fit">
              <Steper activeDot={activeDot} totalDots={totalDots} key={1} />
            </div>
          )}
          <div className="w-full h-full over">{renderCurrentView()}</div>
        </div>
      </TransitionGroupLayout>
    </main>
  );
};

export default withGetLoanController(GetLoanView);
