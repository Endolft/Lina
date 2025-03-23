// -------- VIEW / CONTROLLER -------- //

export interface WelcomeViewProps {
  handleContinue: () => void;
  activeDot: number;
  totalDots: number;
  currentStepContent: {
    title: string;
    subtitle: string;
    img: any;
  };
}

export type WelcomeViewType = React.FC<WelcomeViewProps>;

export interface WelcomeControllerProps {}

// ---------- SERVICES ---------- //

export interface Welcome {
  name: string;
}
