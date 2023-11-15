import React from "react";

const Steptwo = () => {
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
          <li className="step">Finish</li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-3 w-[384px]">
        <img src="/balance.png" className="w-12 h-12"></img>
        <p className="text-2xl font-semibold">Set up your cash Balance</p>
        <div className="w-full">
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full bg-slate-100"
          />
          <p className="text-xs font-normal text-slate-500 my-4">
            How much cash do you have in your wallet?
          </p>
          <button className="btn btn-primary rounded-[20px] bg-[#0166FF] text-white w-full m-2 font-normal">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Steptwo;
