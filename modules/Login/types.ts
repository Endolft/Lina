// -------- VIEW / CONTROLLER -------- //

import { VerificationResponse } from "@worldcoin/id";

export interface LoginViewProps {}

export type LoginViewType = React.FC<LoginViewProps>;

export interface LoginControllerProps {}

// ---------- SERVICES ---------- //

export interface Login {
  name: string;
}
