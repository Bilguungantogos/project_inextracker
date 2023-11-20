import React from "react";

const Piechartinfo = ({ piedata }) => {
  return (
    <div className="flex  items-center justify-between w-full">
      <div className="flex gap-1">
        <img src="./dots/bluedot.svg"></img>
        <p>{piedata.exname}</p>
      </div>
      <p>5000000</p>
      <p>15.50%</p>
    </div>
  );
};

export default Piechartinfo;
