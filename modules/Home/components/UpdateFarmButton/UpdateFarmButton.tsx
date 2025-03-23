import Button from "@/components/Button";
import React from "react";
import chevronLeft from "@/public/assets/chevron-left.svg";
import { useRouter } from "next/navigation";

const UpdateFarmButton = () => {
  const router = useRouter();

  return (
    <Button
      label="Upgrade my farm"
      className=""
      iconEnd={chevronLeft}
      onClick={() => router.push("/farm/update")}
    />
  );
};

export default UpdateFarmButton;
