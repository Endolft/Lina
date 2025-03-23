import Card from "@/components/Card";
import React from "react";
import UpdateFarmButton from "../UpdateFarmButton";

const CardLoan = () => {
  return (
    <Card
      rounded="md"
      className="bg-[linear-gradient(102deg,#72B472_5.2%,#A0E0A0_94.85%)] !gap-6 flex flex-col border !border-[#233923] text-n0"
      shadow="e3"
      padding="xl"
    >
      <h6 className="font-bold"> Need money to improve your farm?</h6>
      <h6>
        To get access to loans with the lowest interest rates, upgrade your farm
        first
      </h6>
      <div className="w-full flex items-end justify-end">
        <UpdateFarmButton />
      </div>
    </Card>
  );
};

export default CardLoan;
