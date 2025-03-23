import withWelcomeController from "./withWelcomeController";
import { WelcomeViewType } from "./types";
import OnboardingStep from "./components/OnboardingStep";
import Steper from "@/components/Steper";

const WelcomeView: WelcomeViewType = ({
  currentStepContent,
  activeDot,
  totalDots,
  handleContinue,
}) => {
  return (
    <main className="w-screen h-screen overflow-hidden p-4 pt-3xl">
      <div>
        <Steper activeDot={activeDot} totalDots={totalDots} />
      </div>
      <div className="h-full w-full  flex" key={activeDot}>
        <OnboardingStep
          {...currentStepContent}
          handleContinue={handleContinue}
        />
      </div>
    </main>
  );
};

export default withWelcomeController(WelcomeView);
