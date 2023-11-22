import React from "react";
import Recordsinfo from "./recordsinfo";

const Records = () => {
  const recordsdata = [
    {
      type: "Lending & Renting",
      timeago: "3 hours ago",
      value: "- 1000₮",
    },
    {
      type: "Lending & Renting",
      timeago: "3 hours ago",
      value: "- 1000₮",
    },
    {
      type: "Lending & Renting",
      timeago: "3 hours ago",
      value: "- 1000₮",
    },
    {
      type: "Lending & Renting",
      timeago: "3 hours ago",
      value: "- 1000₮",
    },
    {
      type: "Lending & Renting",
      timeago: "3 hours ago",
      value: "- 1000₮",
    },
  ];
  return (
    <div className="flex flex-col justify-center rounded-[10px] bg-white mt-[26px]">
      <p className="px-6 py-3 font-normal text-base border-b-[#e3e3e3] border-b-[1px]">
        Last Records
      </p>
      {recordsdata.map((data) => {
        return <Recordsinfo data={data} />;
      })}
    </div>
  );
};

export default Records;
