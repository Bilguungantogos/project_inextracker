import React from "react";

const Signup = ({ setLogsign }) => {
  const logsignbtn = () => {
    setLogsign(false);
  };
  return (
    <div className="flex flex-col justify-center w-[384px] m-auto mt-[40%] gap-10">
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
          type="text"
          placeholder="Password"
          className="input input-bordered w-full bg-slate-100"
        />
        <input
          type="text"
          placeholder="Re-password"
          className="input input-bordered w-full bg-slate-100"
        />
        <button className="btn btn-primary rounded-[20px] bg-[#0166FF] text-white">
          Sign up
        </button>
      </div>
      <div className="flex justify-center gap-2">
        <p className="text-base font-normal text-center">Don't have account?</p>
        <button className="ml-1 text-[#0166FF]" onClick={logsignbtn}>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Signup;
