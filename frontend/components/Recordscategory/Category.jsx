import React from "react";

const Category = ({ data }) => {
  return (
    <div className="flex items-center justify-between mb-2 ">
      <div className="flex gap-1">
        <img src="./ghost.svg"></img>
        <p>{data.names}</p>
      </div>
      <img src="./leadingicon.svg"></img>
    </div>
  );
};

export default Category;
