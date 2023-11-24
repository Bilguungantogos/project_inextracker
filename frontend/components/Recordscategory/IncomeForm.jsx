import React from "react";
import { useState } from "react";

const IncomeForm = ({ open, closeForm, setSwitch1 }) => {
  return (
    <div
      className="modal bg-[#3636369a] w-full h-full"
      open={open}
      switch1={switch1}
    >
      <div className=" p-0 m-0 w-[800px] bg-white">
        <div className="flex justify-between border-b-[1px] px-6 py-5 ">
          <h4>Add Record</h4>
          <button onClick={closeForm}>X</button>
        </div>
        <div className="flex">
          <div className="py-4 px-6 w-[50%]">
            <div className="flex mb-4">
              <button
                className="btn btn-default w-[50%]"
                onClick={() => {
                  setSwitch1(false);
                }}
              >
                Expense
              </button>
              <button
                className="btn btn-neutral w-[50%] bg-[#16A34A]"
                onClick={() => {
                  setSwitch1(true);
                }}
              >
                Income
              </button>
            </div>
            <div className="flex flex-col">
              <div className="form-control w-full">
                <div className="border rounded-lg bg-[#e8e8e8] py-2 px-4">
                  <label className="label m-0 p-0">
                    <span className="label-text">Amount</span>
                  </label>
                  <input
                    type="text"
                    placeholder="₮ 000.00"
                    className="input input-bordered-none bg-[#e8e8e8] m-0 p-0 w-full h-7"
                  />
                </div>
              </div>
              <div className="mt-[19px]">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select className="select select-bordered w-full">
                  <option disabled selected>
                    Choose
                  </option>
                  <option>Drink</option>
                  <option>Food</option>
                </select>
              </div>
              <div className="flex gap-2">
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <select className="select select-bordered w-full">
                    <option disabled selected>
                      Oct 30,2023
                    </option>
                    <option>aa</option>
                    <option>a</option>
                  </select>
                </div>
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <select className="select select-bordered w-full">
                    <option disabled selected>
                      4:15 PM
                    </option>
                    <option>a</option>
                    <option>aa</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="btn btn-primary w-full my-8 rounded-full">
              Add Record
            </button>
          </div>
          <div className="py-4 px-6 w-[50%] ">
            <label className="label">
              <span className="label-text">Payee</span>
            </label>
            <select className="select select-bordered bg-[#e8e8e8] w-full">
              <option disabled selected>
                Write here
              </option>
              <option>Drink</option>
              <option>Food</option>
            </select>
            <label className="label mt-[19px]">
              <span className="label-text ">Note</span>
            </label>
            <textarea
              type="text"
              placeholder="Type here"
              className="input w-full h-[50%] p-4 bg-[#e8e8e8]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeForm;
