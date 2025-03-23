"use client";

import { useRouter } from "next/navigation";
import { FC, useRef, useState } from "react";

export enum NavigationState {
  back = "back",
  next = "next",
}

interface UseInternalNavigationHistoryProps {
  flowSteps: JSX.Element[] | FC<any>[];
  baseUrl: string;
}

export const TIME_TRANSITION = 450;

const useInternalNavigationHistory = ({
  flowSteps,
  baseUrl,
}: UseInternalNavigationHistoryProps) => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const startFlowRef = useRef(false);
  const [animationType, setAnimationType] = useState(NavigationState.next);

  const goToNextStep = (): void => {
    const nextStep = currentStep + 1;
    if (currentStep < flowSteps.length - 1) {
      setCurrentStep(nextStep);
      router.replace(`/${baseUrl}?${nextStep}`); // 🔹 Se asegura de construir bien la URL
    }
  };

  const goBack = (nativeBack: boolean = false) => {
    const prevStep = currentStep - 1;
    setAnimationType(NavigationState.back);

    if (prevStep >= 0) {
      setTimeout(() => {
        setCurrentStep(prevStep);
        if (!nativeBack) {
          router.replace(`/${baseUrl}?${prevStep}`);
        }
      }, 0);
    } else {
      router.back();
    }

    setTimeout(() => {
      setAnimationType(NavigationState.next);
    }, TIME_TRANSITION);
  };

  return {
    currentStep,
    animationType,
    goToNextStep,
    goBack,
    setCurrentStep,
  };
};

export default useInternalNavigationHistory;
