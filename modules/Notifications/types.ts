// -------- VIEW / CONTROLLER -------- //

import { Notification } from "./withNotificationsController";

export interface NotificationsViewProps {
  handleBack: () => void;
  weatherAlerts: Notification[];
}

export type NotificationsViewType = React.FC<NotificationsViewProps>;

export interface NotificationsControllerProps {}

// ---------- SERVICES ---------- //

export interface Notifications {
  name: string;
}
