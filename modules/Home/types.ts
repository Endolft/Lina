// -------- VIEW / CONTROLLER -------- //

export interface HomeViewProps {
  handleRedirectNotification: () => void;
}

export type HomeViewType = React.FC<HomeViewProps>;

export interface HomeControllerProps {}

// ---------- SERVICES ---------- //

export interface Home {
  name: string;
}
