import React, { useEffect, useState } from "react";
import Loginmini from "../../components/SignupandSignin/Loginmini";
import Signup from "../../components/SignupandSignin/Signup";

const login = () => {
  const [logsign, setLogsign] = useState(false);

  return (
    <div className="flex">
      <div className="bg-white w-full h-screen">
        {!logsign && <Loginmini setLogsign={setLogsign} />}
        {logsign && <Signup setLogsign={setLogsign} />}
      </div>
      <div className="bg-[#0166FF] w-full h-screen"></div>
    </div>
  );
};

export default login;
