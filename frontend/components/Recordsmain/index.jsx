import React from "react";
import Recordsmaininfo from "./Recordsmaininfo";

const Recordsmain = () => {
  const todaydata = [1, 2, 3, 4, 5];
  return (
    <div className=" w-[85%] ">
      <div className="flex justify-between items-center px-6">
        <div className="flex items-center gap-3">
          <img
            src="./arrows/leftarrow.svg"
            className="w-8 h-8 bg-[#E5E7EB] rounded-[10px]"
          ></img>
          <p>Last 30 Days</p>
          <img
            src="./arrows/rightarrow.svg"
            className="w-8 h-8 bg-[#E5E7EB] rounded-[10px]"
          ></img>
        </div>
        <div className="dropdown">
          <div>
            <label tabIndex={0} className="btn m-1 bg-white">
              Newest first<img src="./arrows/downarrow.svg"></img>
            </label>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="flex justify-between mx-6 py-4 border-b-[#e3e3e3] border-b-[1px] bg-white px-6 mt-6">
          <div className="flex gap-4 items-center">
            <div className="flex gap-2">
              <input type="checkbox" className="checkbox" />
              <h4>Select all</h4>
            </div>
          </div>
          <div>
            <p className="text-base font-semibold text-[#94A3B8]">- 35,500₮</p>
          </div>
        </div>
        <div className="m-6">
          <p className="font-semibold">Today</p>
          {todaydata.map(() => {
            return <Recordsmaininfo />;
          })}
        </div>
        <div className="m-6">
          <p className="font-semibold">Yesterday</p>
          {todaydata.map(() => {
            return <Recordsmaininfo />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Recordsmain;
