import React from "react";

const Piechartinfo = ({ data }) => {
  return (
    <div className="flex  items-center justify-between w-full mb-4">
      <div className="flex items-center gap-1 w-10">
        <img src={data.dotcolorsrc} className="w-3 h-3"></img>
        <p>{data.exname}</p>
      </div>
      <p className="w-8">{data.value}</p>
      <p className="w-8">{data.percent}</p>
    </div>
  );
};

export default Piechartinfo;
