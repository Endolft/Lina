// -------- VIEW / CONTROLLER -------- //

import { NavigationState } from "@/context/hooks/useInternalNavigationHistory";

export interface CreateFarmViewProps {
  animationType: NavigationState;
  activeDot: number;
  totalDots: number;
  renderCurrentView: () => JSX.Element;
}

export type CreateFarmViewType = React.FC<CreateFarmViewProps>;

export interface CreateFarmControllerProps {}

// ---------- SERVICES ---------- //

export interface CreateFarm {
  name: string;
}
