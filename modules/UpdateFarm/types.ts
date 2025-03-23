// -------- VIEW / CONTROLLER -------- //

export interface UpdateFarmViewProps {
  name: string;
}

export type UpdateFarmViewType = React.FC<UpdateFarmViewProps>;

export interface UpdateFarmControllerProps {}

// ---------- SERVICES ---------- //

export interface UpdateFarm {
  name: string;
}
