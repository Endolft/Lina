import Img from "@/components/Img";
import React, { useState } from "react";
import termImg from "@/public/illustration/terms.svg";
import Button from "@/components/Button";

interface Props {
  handleBack: () => void;
  next: () => void;
}

const Terms = ({ handleBack, next }: Props) => {
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);

  return (
    <div className="w-full h-full flex flex-col  gap-4 items-center justify-between p-6">
      <div className="flex  flex-1 flex-col  justify-center items-center text-center">
        <h2 className=" font-bold">Terms & Conditions</h2>
        <h6 className="text-n3 ">Please accept the terms to continue</h6>
        <Img src={termImg} alt="Terms and Conditions" className=" mt-2" />
      </div>

      <div className="w-full flex  flex-col gap-3 text-sm">
        <label className="flex items-center gap-2 text-n3">
          <input
            type="radio"
            name="terms"
            checked={acceptTerms}
            onChange={() => setAcceptTerms(!acceptTerms)}
            className="w-4 h-4 accent-green-700 cursor-pointer"
          />
          I accept the{" "}
          <a href="#" className="text-green-900 underline">
            Terms & Conditions
          </a>
        </label>

        <label className="flex items-center gap-2 text-n3">
          <input
            type="radio"
            name="privacy"
            checked={acceptPrivacy}
            onChange={() => setAcceptPrivacy(!acceptPrivacy)}
            className="w-4 h-4 accent-green-700 cursor-pointer"
          />
          I accept the{" "}
          <a href="#" className="text-green-900 underline">
            Privacy Policy
          </a>
        </label>
      </div>

      <div className="w-full flex flex-col gap-3">
        <Button
          handleClick={next}
          label="Continue"
          className="!w-full"
          disabled={!acceptTerms || !acceptPrivacy}
        />
        <Button
          handleClick={handleBack}
          label="Back"
          className="!w-full"
          variant="secondary"
        />
      </div>
    </div>
  );
};

export default Terms;
