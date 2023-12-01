import React from "react";
import Loginmini from "../Loginmini";

const Signup = ({ logsignswitch, setLogsignswitch }) => {
  const switchbtn2 = () => {
    logsignswitch;
  };
  return (
    <div className="flex flex-col justify-center w-[384px] mt-[25%] m-auto gap-10">
      <div className="flex justify-center gap-2 p-[5.4px]">
        <img src="/geldlogo.svg" className=" cursor-pointer" />
        <img src="/geld.svg" className=" cursor-pointer" />
      </div>
      <div className="text-center">
        <p className="text-2xl font-semibold">Create Geld account</p>
        <p className="text-base font-normal text-slate-500">
          Sign up below to create your Wallet account
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full bg-slate-100"
        />
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered w-full bg-slate-100 "
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full bg-slate-100"
        />
        <input
          type="password"
          placeholder="Re-password"
          className="input input-bordered w-full bg-slate-100"
        />
        <button className="btn btn-primary rounded-[20px] bg-[#0166FF] text-white">
          Sign up
        </button>
      </div>
      <div className="flex justify-center gap-2">
        <p className="text-base font-normal text-center">Don't have account?</p>
        <button className="ml-1 text-[#0166FF]" onClick={switchbtn2}>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Signup;
