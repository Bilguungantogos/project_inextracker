import React, { useContext, useState } from "react";
import { StepContext } from "@/context/StepContext";

const Stepone = () => {
  const { changeStepData, toSteptwo } = useContext(StepContext);

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex flex-col gap-12 mb-[142px]">
        <div className="flex justify-center gap-2 p-[5.4px]">
          <img src="/geldlogo.svg" className=" cursor-pointer" />
          <img src="/geld.svg" className=" cursor-pointer" />
        </div>
        <ul className="steps w-60">
          <li className="step step-primary">Currency</li>
          <li className="step">Balance</li>
          <li className="step">Finish</li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-3 w-[384px]">
        <img src="/currency.png" className="w-12 h-12"></img>
        <p className="text-2xl font-semibold">Select Base currency</p>
        <select
          className="select select-bordered w-full h-16 mt-8 bg-slate-100 font-semibold"
          name="currency_type"
          onChange={(e) => {
            changeStepData(e.target.name, e.target.value);
          }}
        >
          <option disabled selected>
            MNT - Mongolian Tugrik
          </option>
          <option value="MNT">MNT - Mongolian Tugrik</option>
          <option value="USD">USD - United States Dollar</option>
          <option value="JPY">JPY - Japanese Yen</option>
        </select>
        <p className="text-xs font-normal text-slate-500">
          Your base currency should be the one you use most often. All
          transaction in other currencies will be calculated based on this one
        </p>
        <button
          className="btn btn-primary rounded-[20px] bg-[#0166FF] text-white w-full mt-8 font-normal text-[20px]"
          onClick={toSteptwo}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Stepone;
