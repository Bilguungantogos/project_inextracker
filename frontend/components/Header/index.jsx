import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-[120px] py-4">
      <div className="flex gap-6">
        <img src="./vector.svg" className="w-[27.7px] h-[27.3px]" />
        <p className="font-semibold">Dashboard</p>
        <p>Records</p>
      </div>
      <div className="flex items-center gap-6">
        <button className="btn btn-primary rounded-[20px] text-white px-4 h-[32px]">
          <img src="./plus.svg" className="w-5 h-5"></img>Record
        </button>
        <img src="./avatar.png" className="w-10 h-10"></img>
      </div>
    </header>
  );
};

export default Header;
