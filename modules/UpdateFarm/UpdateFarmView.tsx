import withUpdateFarmController from "./withUpdateFarmController";
import { UpdateFarmViewType } from "./types";
import Steper from "@/components/Steper";

const UpdateFarmView: UpdateFarmViewType = ({ name }) => {
  return (
    <main className="w-full h-screen">
      <Steper activeDot={1} totalDots={3} />
    </main>
  );
};

export default withUpdateFarmController(UpdateFarmView);

/* https://80ab-186-125-134-194.ngrok-free.app */
