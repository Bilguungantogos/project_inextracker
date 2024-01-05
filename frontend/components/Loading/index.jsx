import React from "react";

const Loading = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-10">
      <div className="flex justify-center gap-2 p-[5.4px]">
        <img src="/geldlogo.svg" className=" cursor-pointer w-[44px]" />
        <img src="/geld.svg" className=" cursor-pointer w-[90px]" />
      </div>
      <div className="flex flex-col items-center gap-4">
        <span className="loading loading-spinner loading-md bg-blue-500"></span>
        <p className="text-base font-normal">Түр хүлээнэ үү...</p>
      </div>
    </div>
  );
};

export default Loading;
