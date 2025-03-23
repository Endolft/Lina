import {
  WelcomeViewType,
  WelcomeControllerProps,
  WelcomeViewProps,
} from "./types";
import { useRouter } from "next/navigation";
import step1Image from "@/public/illustration/onboarding-step-1.svg";
import step2Image from "@/public/illustration/onboarding-step-2.svg";
import step3Image from "@/public/illustration/onboarding-step-3.svg";
import step4Image from "@/public/illustration/onboarding-step-4.svg";
import useInternalNavigationHistory from "@/context/hooks/useInternalNavigationHistory";
import OnboardingStep from "./components/OnboardingStep";
import { useState } from "react";

const STEPS = [
  {
    img: step1Image,
    title: "Welcome",
    subtitle: "I’m Lina your agriculture ally",
  },
  {
    img: step2Image,
    title: "I’m an expert",
    subtitle: "Powered by countless satellite insights and advanced AI",
  },
  {
    img: step3Image,
    title: "I’m here to help",
    subtitle:
      "With my alerts and tailored tips, you can make the best choices for your crops",
  },
  {
    img: step4Image,
    title: "Access to the best loans",
    subtitle: "We offer the best interest rates for the best farms.",
  },
];

const withWelcomeController = (View: WelcomeViewType) =>
  function Controller(props: WelcomeControllerProps): JSX.Element {
    const [currentStep, setCurrentStep] = useState(0);

    const goToNextStep = () => {
      if (currentStep < STEPS.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        router.push("/auth/login");
      }
    };

    const router = useRouter();

    const viewProps: WelcomeViewProps = {
      activeDot: currentStep,
      totalDots: STEPS.length,
      currentStepContent: STEPS[currentStep],
      handleContinue: goToNextStep,
    };

    return <View {...viewProps} />;
  };

export default withWelcomeController;
