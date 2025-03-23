import { useRouter } from "next/navigation";
import {
  GetLoanViewType,
  GetLoanControllerProps,
  GetLoanViewProps,
} from "./types";
import useInternalNavigationHistory from "@/context/hooks/useInternalNavigationHistory";
import { FC } from "react";
import ApprovedAmount from "./views/ApprovedAmount";
import Terms from "./views/Terms";
import Summary from "./views/Summary";

const LOAN_FLOW = [ApprovedAmount, Terms, Summary];

const withGetLoanController = (View: GetLoanViewType) =>
  function Controller(props: GetLoanControllerProps): JSX.Element {
    const router = useRouter();
    const { animationType, currentStep, goBack, goToNextStep } =
      useInternalNavigationHistory({
        baseUrl: "farm/loan",
        flowSteps: LOAN_FLOW,
      });

    const handleBack = () => {
      if (currentStep === 0) {
        router.push("/farm");
        return;
      }
      goBack();
    };

    const next = () => {
      if (currentStep < LOAN_FLOW.length - 1) {
        goToNextStep();
      } else {
        router.push("/farm");
      }
    };

    const renderCurrentView = () => {
      const Component: FC<any> = LOAN_FLOW[currentStep];

      if (!Component) {
        return <div></div>;
      }
      return <Component next={next} handleBack={handleBack} />;
    };

    const viewProps: GetLoanViewProps = {
      animationType,
      activeDot: currentStep,
      totalDots: LOAN_FLOW.length,
      renderCurrentView,
    };

    return <View {...viewProps} />;
  };

export default withGetLoanController;
