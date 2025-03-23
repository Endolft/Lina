// -------- VIEW / CONTROLLER -------- //

import { NavigationState } from "@/context/hooks/useInternalNavigationHistory";

export interface GetLoanViewProps {
  animationType: NavigationState;
  activeDot: number;
  totalDots: number;
  renderCurrentView: () => JSX.Element;
}

export type GetLoanViewType = React.FC<GetLoanViewProps>;

export interface GetLoanControllerProps {}

// ---------- SERVICES ---------- //

export interface GetLoan {
  name: string;
}
