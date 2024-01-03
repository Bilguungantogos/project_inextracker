import React from "react";

const Recordsinfo = ({ data }) => {
  return (
    <div className="flex justify-between mx-6 py-4 border-b-[#e3e3e3] border-b-[1px] ">
      <div className="flex gap-4 items-center">
        <img
          src="./house1.svg"
          className="bg-[#0166FF] w-10 p-[10px] rounded-full"
        ></img>
        <div>
          <h4>{data?.name}</h4>
          <p className="font-normal text-xs text-[#6B7280]">
            {data?.createdat}
          </p>
        </div>
      </div>
      <div>
        <p
          className={`${
            data.transaction_type === "EXP" ? "text-red-500" : "text-lime-500"
          } font-semibold`}
        >
          {data.amount}
        </p>
      </div>
    </div>
  );
};

export default Recordsinfo;
