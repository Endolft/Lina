import { useState } from "react";
import {
  NotificationsViewType,
  NotificationsControllerProps,
  NotificationsViewProps,
} from "./types";
import { useRouter } from "next/navigation";

export interface Notification {
  title: string;
  message: string;
  timeAgo: string;
  type: string;
}

const withNotificationsController = (View: NotificationsViewType) =>
  function Controller(props: NotificationsControllerProps): JSX.Element {
    const router = useRouter();

    const weatherAlerts: Notification[] = [
      {
        title: "🚨 Urgent: Frost Warning",
        message:
          "Temperatures are expected to drop below freezing tonight. Consider protecting your crops.",
        timeAgo: "15 min ago",
        type: "urgent",
      },
      {
        title: "🌧️ Upcoming Rain",
        message:
          "Rain is expected in 3 days. Plan your irrigation accordingly.",
        timeAgo: "30 min ago",
        type: "default",
      },
      {
        title: "🌱 Soil Moisture Low",
        message:
          "Soil moisture levels are critically low in field A. Consider watering soon.",
        timeAgo: "1 hour ago",
        type: "warning",
      },
      {
        title: "💨 Strong Winds Expected",
        message:
          "Winds of up to 60km/h are expected tomorrow. Secure loose materials.",
        timeAgo: "2 hours ago",
        type: "warning",
      },
    ];

    const handleBack = () => {
      router.push("/farm");
    };

    const viewProps: NotificationsViewProps = { handleBack, weatherAlerts };

    return <View {...viewProps} />;
  };

export default withNotificationsController;
