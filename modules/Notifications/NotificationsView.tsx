import withNotificationsController from "./withNotificationsController";
import { NotificationsViewType } from "./types";
import Alert from "@/components/Alert";
import ChevronIcon from "@/components/ChevronIcon";

const NotificationsView: NotificationsViewType = ({
  handleBack,
  weatherAlerts,
}) => {
  return (
    <div className="space-y-4 flex flex-col p-4">
      <button className="flex w-full items-center gap-2 " onClick={handleBack}>
        <ChevronIcon size="small" type="left" />
        <h6 className="text-n3">Back</h6>
      </button>
      <h3>Notifications</h3>
      {weatherAlerts.map((alert, index) => (
        <Alert
          key={index}
          title={alert.title}
          message={alert.message}
          timeAgo={alert.timeAgo}
          type={alert.type as "default" | "warning" | "urgent"}
        />
      ))}
    </div>
  );
};

export default withNotificationsController(NotificationsView);
