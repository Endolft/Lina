import withUpdateFarmController from "./withUpdateFarmController";
import { UpdateFarmViewType } from "./types";

const UpdateFarmView: UpdateFarmViewType = ({ name }) => {
  return <main className="w-full h-screen"></main>;
};

export default withUpdateFarmController(UpdateFarmView);
