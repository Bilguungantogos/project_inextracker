import React from "react";
import Loginmini from "./Loginmini";
import Signup from "./Signup";
import { useState } from "react";
import { useEffect } from "react";

const SignupandSignin = () => {
  const [logsignswitch, setLogsignswitch] = useState(false);
  return (
    <>
      {logsignswitch && (
        <Signup
          logsignswitch={logsignswitch}
          setLogsignswitch={setLogsignswitch}
        />
      )}

      {!logsignswitch && (
        <Loginmini
          logsignswitch={logsignswitch}
          setLogsignswitch1={setLogsignswitch}
        />
      )}
    </>
  );
};

export default SignupandSignin;
