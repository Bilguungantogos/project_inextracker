import React, { useContext } from "react";
import { StepContext } from "@/context/StepContext";

const Stepthree = () => {
  const { goToDashboard } = useContext(StepContext);
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex flex-col gap-12 mb-[142px]">
        <div className="flex justify-center gap-2 p-[5.4px]">
          <img src="/geldlogo.svg" className=" cursor-pointer" />
          <img src="/geld.svg" className=" cursor-pointer" />
        </div>
        <ul className="steps w-60">
          <li className="step step-primary">Currency</li>
          <li className="step step-primary">Balance</li>
          <li className="step step-primary">Finish</li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-3 w-[384px]">
        <img src="/goodjob.png" className="w-12 h-12"></img>
        <p className="text-2xl font-semibold">Good Job!</p>
        <div className="w-full">
          <p className="text-[16px] text-center font-normal text-slate-500 my-4">
            Your very first account has been created. Now continue to dashboard
            and start tracking
          </p>
          <button
            className="btn btn-primary rounded-[20px] bg-[#0166FF] text-white w-full m-2 font-normal text-[20px]"
            onClick={goToDashboard}
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stepthree;
