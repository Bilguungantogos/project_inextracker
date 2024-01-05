import React, { useEffect, useState } from "react";
import Loginmini from "../../components/Loginmini";
import Signup from "../../components/Signup";

const login = () => {
  return (
    <div className="flex">
      <div className="bg-white w-full h-screen">
        <Signup />
      </div>
      <div className="bg-[#0166FF] w-full h-screen"></div>
    </div>
  );
};

export default login;
