import React from "react";

const RecordIcons = ({ category, changeTransactionData }) => {
  return (
    <div>
      {category.map((el) => {
        return (
          <button
            className="w-full font-normal mb-4 flex items-center gap-3 hover:opacity-50"
            onClick={(e) => {
              e.preventDefault();
              changeTransactionData("category_id", el.id);
            }}
          >
            {getIcons(el.iconname, el.iconcolor)}
            {el.name}
          </button>
        );
      })}
    </div>
  );
};

export default RecordIcons;
