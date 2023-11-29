import Link from "next/link";
import React from "react";
import ExpenseForm from "../Recordscategory/ExpenseForm";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const closeForm = () => {
    setOpen(false);
  };
  return (
    <header className="flex items-center justify-between px-[120px] py-4">
      <div className="flex gap-6">
        <Link href="./">
          <img src="./vector.svg" className="w-[27.7px] h-[27.3px]" />
        </Link>
        <Link href="./">
          <p className="font-semibold">Dashboard</p>
        </Link>
        <Link href="./records">
          <p>Records</p>
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <button
          className="btn btn-primary rounded-[20px] text-white px-4 h-[32px]"
          onClick={() => {
            setOpen(true);
          }}
        >
          <img src="./plus.svg" className="w-5 h-5"></img>Record
        </button>
        <img src="./avatar.png" className="w-10 h-10"></img>
      </div>
      <ExpenseForm open={open} closeForm={closeForm} />
    </header>
  );
};

export default Header;
