import React, { useContext } from "react";
import Recordsinfo from "./recordsinfo";
import { TransactionContext } from "@/context/TransactionContext";

const Records = () => {
  const { transactions } = useContext(TransactionContext);
  return (
    <div className="flex flex-col justify-center rounded-[10px] bg-white mt-[26px]">
      <p className="px-6 py-3 font-normal text-base border-b-[#e3e3e3] border-b-[1px]">
        Last Records
      </p>
      {transactions.map((data) => {
        return <Recordsinfo data={data} />;
      })}
    </div>
  );
};

export default Records;
