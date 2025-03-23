import { FC, useState } from "react";
import {
  CreateFarmViewType,
  CreateFarmControllerProps,
  CreateFarmViewProps,
} from "./types";
import useInternalNavigationHistory from "@/context/hooks/useInternalNavigationHistory";
import StartView from "./views/StartView";
import GeoLocation from "./views/GeoLocation";
import CropsDetails from "./views/CropsDetails";
import AvailableTools from "./views/AvailableTools";
import FarmFiles from "./views/FarmFiles";
import Summary from "./views/Summary";
import { useRouter } from "next/navigation";

const CREATE_FARM_STEPS = [
  StartView,
  GeoLocation,
  CropsDetails,
  AvailableTools,
  FarmFiles,
  Summary,
];

const withCreateFarmController = (View: CreateFarmViewType) =>
  function Controller(props: CreateFarmControllerProps): JSX.Element {
    const router = useRouter();
    const { animationType, currentStep, goBack, goToNextStep } =
      useInternalNavigationHistory({
        baseUrl: "farm/create",
        flowSteps: CREATE_FARM_STEPS,
      });

    const handleBack = () => {
      if (currentStep === 0) {
        return;
      }
      goBack();
    };

    const next = () => {
      if (currentStep < CREATE_FARM_STEPS.length - 1) {
        goToNextStep();
      } else {
        router.push("/farm");
      }
    };

    const renderCurrentView = () => {
      const Component: FC<any> = CREATE_FARM_STEPS[currentStep];

      if (!Component) {
        return <div></div>;
      }
      return <Component next={next} handleBack={handleBack} />;
    };

    const viewProps: CreateFarmViewProps = {
      animationType,
      activeDot: currentStep,
      totalDots: CREATE_FARM_STEPS.length,
      renderCurrentView,
    };

    return <View {...viewProps} />;
  };

export default withCreateFarmController;
