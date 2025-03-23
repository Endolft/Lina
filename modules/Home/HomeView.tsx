import withHomeController from "./withHomeController";
import { HomeViewType } from "./types";
import Img from "@/components/Img";
import logoLina from "@/public/assets/lina-text-with-logo.svg";
import notificationIcon from "@/public/assets/icon-notification.svg";
import CardScore from "./components/CardScore";
import CardLoan from "./components/CardLoan";
import Alert from "@/components/Alert";

const HomeView: HomeViewType = ({ handleRedirectNotification }) => {
  return (
    <main className="w-full h-full flex flex-col gap-8 p-5">
      <header className="w-full justify-between flex">
        <Img src={logoLina} alt="home" className="h-8 w-[5rem]" />
        <button onClick={handleRedirectNotification}>
          <Img src={notificationIcon} alt="notification" className="w-5" />
        </button>
      </header>
      <div className="flex flex-col gap-6">
        <h6 className="font-bold text-n3">Hi, Farmer!</h6>
        <CardScore />
        <h5 className="font-bold">Alerts</h5>
        <div className="space-y-4">
          <Alert
            title="Reminder"
            message="Don't forget to check your crop status."
            timeAgo="10 min ago"
            type="default"
          />
          <Alert
            title="Water Usage Alert"
            message="Your farm's water consumption is above average."
            timeAgo="5 min ago"
            type="warning"
          />
          x
        </div>{" "}
        <h5 className="font-bold">My loan options</h5>
        <CardLoan />
      </div>
    </main>
  );
};

export default withHomeController(HomeView);
