import React from "react";

const Recordsmaininfo = () => {
  return (
    <div className="flex justify-between items-center  py-4 border-b-[#e3e3e3] border-b-[1px] bg-white px-6 mt-3">
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-4">
          <input type="checkbox" className="checkbox" />
          <img
            src="./foodanddrinks.svg"
            className="bg-[#FF4545] w-10 p-[10px] rounded-full"
          ></img>
          <div>
            <h4>Lending & Renting</h4>
            <p className="text-xs text-[#6B7280]">14:00</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-base font-semibold text-[#23E01F]">- 1,000₮</p>
      </div>
    </div>
  );
};

export default Recordsmaininfo;
