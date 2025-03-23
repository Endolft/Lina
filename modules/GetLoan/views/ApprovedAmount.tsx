import Button from "@/components/Button";
import ChevronIcon from "@/components/ChevronIcon";
import React from "react";

interface Props {
  handleBack: () => void;
  next: () => void;
}

const ApprovedAmount = ({ handleBack, next }: Props) => {
  return (
    <div className="!w-full h-full flex flex-col  py-4 gap-6 items-center">
      <button className="flex w-full items-center gap-2 " onClick={handleBack}>
        <ChevronIcon size="small" type="left" />
        <h6 className=" text-n3 s">Back</h6>
      </button>
      <div className="bg-white p-2 rounded-lg  max-w-md mx-auto flex-1">
        <h3 className=" text-n3 s font-semibold text-center">
          Approved Amount
        </h3>
        <p className="text-3xl font-bold text-center mt-1">$10,000.00 USD</p>

        <hr className="border-t border-gray-200 my-4" />

        <h4 className="text-green-900 font-semibold">Loan terms</h4>
        <div className="mt-2 space-y-2">
          <div className="flex justify-between">
            <span className=" text-n3 s">Repayment period</span>
            <span className="s">12 months</span>
          </div>
          <div className="flex justify-between">
            <span className=" text-n3 s">Annual interest rate</span>
            <span className="s">7% (fixed)</span>
          </div>
          <div className="flex justify-between">
            <span className=" text-n3 s">Total amount to be repaid</span>
            <span className="s">USD 10,700</span>
          </div>
          <div className="flex justify-between">
            <span className=" text-n3 s">First payment due date</span>
            <span className="s">Start date + 30 days</span>
          </div>
          <div className="flex justify-between">
            <span className=" text-n3 s">Payment frequency</span>
            <span className="s">Monthly</span>
          </div>
          <div className="flex justify-between">
            <span className=" text-n3 s">Monthly payment amount</span>
            <span className="s">USD 891.67</span>
          </div>
        </div>

        <hr className="border-t border-gray-200 my-4" />

        <h4 className="text-green-900 font-semibold">Payment Methods</h4>
        <ul className="mt-2  text-n3 s list-disc pl-4 space-y-1">
          <li>Bank Transfer</li>
          <li>Stablecoins (USDT, USDC, or Lina's token)</li>
          <li>Automatic deduction from agricultural income (if applicable)</li>
        </ul>
      </div>
      <div className="w-full flex flex-col gap-4 items-center">
        <Button handleClick={next} label="Next" className="!w-10/12 " />

        <Button
          className="!w-10/12"
          handleClick={handleBack}
          variant="secondary"
          label="Back"
        />
      </div>
    </div>
  );
};

export default ApprovedAmount;
