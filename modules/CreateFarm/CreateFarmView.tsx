import withCreateFarmController from "./withCreateFarmController";
import { CreateFarmViewType } from "./types";
import Stepper from "@/components/Steper/Steper";
import TransitionGroupLayout from "@/components/TransitionGroupLayout";

const CreateFarmView: CreateFarmViewType = ({
  activeDot,
  totalDots,
  animationType,
  renderCurrentView,
}) => {
  return (
    <main className="w-screen overflow-hidden h-screen flex p-4 py-6  flex-col items-center gap-6 ">
      <TransitionGroupLayout
        animationType={animationType}
        transitionGroupKey={activeDot ?? 0}
      >
        <div className="w-full h-full flex-1">
          {activeDot + 1 !== totalDots && (
            <div className="h-fit">
              <Stepper activeDot={activeDot} totalDots={totalDots} key={1} />
            </div>
          )}
          <div className="w-full h-full over">{renderCurrentView()}</div>
        </div>
      </TransitionGroupLayout>
    </main>
  );
};

export default withCreateFarmController(CreateFarmView);
