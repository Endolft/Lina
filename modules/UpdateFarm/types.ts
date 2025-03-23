// -------- VIEW / CONTROLLER -------- //

import { NavigationState } from "@/context/hooks/useInternalNavigationHistory";

export interface UpdateFarmViewProps {
  animationType: NavigationState;
  activeDot: number;
  totalDots: number;
  renderCurrentView: () => JSX.Element;
}

export type UpdateFarmViewType = React.FC<UpdateFarmViewProps>;

export interface UpdateFarmControllerProps {}

// ---------- SERVICES ---------- //

export interface UpdateFarm {
  name: string;
}
