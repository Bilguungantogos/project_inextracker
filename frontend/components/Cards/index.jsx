import React from "react";
import Incomecomp from "./incomecomp";
import Expensescomp from "./Expensescomp";
import Debitcard from "./Debitcard";

const Cards = () => {
  return (
    <div className="flex gap-6 justify-center">
      <Debitcard />
      <Incomecomp />
      <Expensescomp />
    </div>
  );
};

export default Cards;
