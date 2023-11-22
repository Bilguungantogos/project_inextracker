import React from "react";

const Recordsmain = () => {
  return (
    <div className=" w-[85%] h-full">
      <div className="flex justify-between items-center">
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
        <div className="flex justify-between mx-6 py-4 border-b-[#e3e3e3] border-b-[1px] ">
          <div className="flex gap-4 items-center">
            <img
              src="./house1.svg"
              className="bg-[#0166FF] w-10 p-[10px] rounded-full"
            ></img>
            <div>
              <h4></h4>
              <p className="text-xs text-[#6B7280]"></p>
            </div>
          </div>
          <div>
            <p className="text-base font-semibold text-[#84CC16]"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recordsmain;
