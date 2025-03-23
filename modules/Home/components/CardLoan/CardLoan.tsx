import Card from "@/components/Card";
import React, { useEffect, useState } from "react";
import UpdateFarmButton from "../UpdateFarmButton";
import Button from "@/components/Button";
import chevronLeft from "@/public/assets/chevron-left.svg";
import { useRouter } from "next/navigation";

const CardLoan = () => {
  const [newLoad, setNewLoad] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const newLoad = localStorage.getItem("newLoad");
    if (newLoad) {
      setNewLoad(true);
    }
  }, []);

  return (
    <Card
      rounded="md"
      className="bg-[linear-gradient(102deg,#72B472_5.2%,#A0E0A0_94.85%)] !gap-6 flex flex-col border !border-[#233923] text-n0"
      shadow="e3"
      padding="xl"
    >
      <h6 className="font-bold"> Need money to improve your farm?</h6>
      {newLoad ? (
        <div>
          <p>Maximun loan ammount</p>
          <h1>$10.000 USD </h1>
        </div>
      ) : (
        <h6>
          To get access to loans with the lowest interest rates, upgrade your
          farm first
        </h6>
      )}
      <div className="w-full flex items-end justify-end">
        {newLoad ? (
          <Button
            label="Get Now"
            handleClick={() => router.push("/farm/loan")}
            className="!bg-[#1F2937]"
            iconEnd={chevronLeft}
          />
        ) : (
          <UpdateFarmButton />
        )}{" "}
      </div>
    </Card>
  );
};

export default CardLoan;
