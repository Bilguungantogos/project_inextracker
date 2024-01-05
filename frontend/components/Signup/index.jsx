import React, { useContext } from "react";
import { useRouter } from "next/router";
import { UserContext } from "@/context/UserProvider";
import { StepContext } from "@/context/StepContext";

const Signup = () => {
  const router = useRouter();
  const handleSignupClick = () => {
    router.push("/login");
  };
  const { toStepone } = useContext(StepContext);
  const { user, signup, formUserData, changeFormUserData } =
    useContext(UserContext);

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
          name="name"
          placeholder="Name"
          className="input input-bordered w-full bg-slate-100"
          value={formUserData.name}
          onChange={(e) => {
            changeFormUserData(e.target.name, e.target.value);
          }}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full bg-slate-100 "
          value={formUserData.email}
          onChange={(e) => {
            changeFormUserData(e.target.name, e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formUserData.password}
          onChange={(e) => {
            changeFormUserData(e.target.name, e.target.value);
          }}
          className="input input-bordered w-full bg-slate-100"
        />
        <input
          type="password"
          placeholder="Re-password"
          name="rePassword"
          value={formUserData.rePassword}
          onChange={(e) => {
            changeFormUserData(e.target.name, e.target.value);
          }}
          className="input input-bordered w-full bg-slate-100"
        />
        <button
          className="btn btn-primary rounded-[20px] bg-[#0166FF] text-white"
          onClick={signup}
        >
          Sign up
        </button>
      </div>
      <div className="flex justify-center gap-2">
        <p className="text-base font-normal text-center">Don't have account?</p>
        <button className="ml-1 text-[#0166FF]" onClick={handleSignupClick}>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Signup;
