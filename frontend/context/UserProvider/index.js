import { Router } from "next/router";
import React, { createContext, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState();
  const [loginUserData, setLoginuserData] = useState({
    email: "naraa@gmail.com",
    password: "",
  });

  const changeLoginUserData = (key, value) => {
    setLoginuserData({ ...loginUserData, [key]: value });
  };

  const login = async () => {
    if (!loginUserData.email || !loginUserData.password) {
      alert("aaa");
      return;
    }
    try {
      const { data } = await axios.post("http://localhost:8008/auth/signin", {
        userEmail: loginUserData.email,
        userPassword: loginUserData.password,
      });
      setUser(data.user);
      router.push("/");
    } catch (error) {
      console.log(error);  
    }
  };

  const signup = () => {};

  return (
    <UserContext.Provider
      value={{ user, loginUserData, changeLoginUserData, login, signup }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
