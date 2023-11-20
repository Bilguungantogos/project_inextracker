import React from "react";
import Piechart from "./Piechart";
import Barchart from "./Barchart";

const Charts = () => {
  return (
    <div className="flex mt-6 gap-6">
      <Barchart />
      <Piechart />
    </div>
  );
};

export default Charts;
