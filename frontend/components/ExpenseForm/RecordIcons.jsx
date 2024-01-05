import React from "react";
import { getIcons } from "@/utils";

const RecordIcons = ({ category, changeTransactionData }) => {
  return (
    <div>
      {category.map((el) => {
        return (
          <button
            className="w-full font-normal mb-4 flex items-center gap-3 hover:opacity-50"
            onClick={(e) => {
              e.preventDefault();
              console.log(el.id);
              changeTransactionData("category_id", el.id);
            }}
          >
            {getIcons(el.categoryimg, el.categorycolor)}
            {el.name}
          </button>
        );
      })}
    </div>
  );
};

export default RecordIcons;
