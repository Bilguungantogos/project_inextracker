import React from "react";

const Addcategory = ({ modalswitch }) => {
  return (
    <div
      className="modal bg-[#3636369a] w-full h-full"
      modalswitch={modalswitch}
    >
      <div className="flex justify-between border-b-[1px] px-6 py-5 ">
        <h4>Add Record</h4>
        <button>X</button>
      </div>
    </div>
  );
};

export default Addcategory;
