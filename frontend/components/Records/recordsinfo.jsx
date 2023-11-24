import React from "react";

const Recordsinfo = ({ data }) => {
  return (
    <div className="flex justify-between mx-6 py-4 border-b-[#e3e3e3] border-b-[1px] ">
      <div className="flex gap-4 items-center">
        <img
          src="./house1.svg"
          className="bg-[#0166FF] w-10 p-[10px] rounded-full"
        ></img>
      </div>
      <div>
        <p className="text-base font-semibold text-[#84CC16]">{data.value}</p>
      </div>
    </div>
  );
};

export default Recordsinfo;
