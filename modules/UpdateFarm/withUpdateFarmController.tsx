import { FC, useState } from "react";
import {
  UpdateFarmViewType,
  UpdateFarmControllerProps,
  UpdateFarmViewProps,
} from "./types";
import UploadFilesView from "./views/UploadFiles";
import SummaryView from "./views/Summary";
import useInternalNavigationHistory from "@/context/hooks/useInternalNavigationHistory";
import { useRouter } from "next/navigation";

const UPDATE_FARM_STEPS = [UploadFilesView, SummaryView];

const withUpdateFarmController = (View: UpdateFarmViewType) =>
  function Controller(props: UpdateFarmControllerProps): JSX.Element {
    const router = useRouter();
    const { animationType, currentStep, goBack, goToNextStep } =
      useInternalNavigationHistory({
        baseUrl: "farm/update",
        flowSteps: UPDATE_FARM_STEPS,
      });

    const handleBack = () => {
      if (currentStep === 0) {
        router.push("/farm");
        return;
      }
      goBack();
    };

    const next = () => {
      if (currentStep < UPDATE_FARM_STEPS.length - 1) {
        goToNextStep();
      } else {
        router.push("/farm");
      }
    };

    const renderCurrentView = () => {
      const Component: FC<any> = UPDATE_FARM_STEPS[currentStep];

      if (!Component) {
        return <div></div>;
      }
      return <Component next={next} handleBack={handleBack} />;
    };

    const viewProps: UpdateFarmViewProps = {
      animationType,
      activeDot: currentStep,
      totalDots: UPDATE_FARM_STEPS.length,
      renderCurrentView,
    };

    return <View {...viewProps} />;
  };

export default withUpdateFarmController;
