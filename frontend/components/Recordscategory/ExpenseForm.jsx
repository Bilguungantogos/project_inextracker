import React, { useEffect } from "react";
import { useState } from "react";
import Addcategory from "./addcategory";

const ExpenseForm = ({ open, closeForm }) => {
  const [switch1, setSwitch1] = useState(false);
  const inexswitchbtn = () => {
    if (switch1) {
      setSwitch1(false);
    } else setSwitch1(true);
  };
  const [modalswitch, setModalswitch] = useState(false);
  const addcategorybtn = () => {
    setModalswitch(true);
  };
  useEffect(() => {}, modalswitch);
  const categorydropdown = [
    { iconsrc: "/categoryicons/house.svg", catname: "Home" },
    { iconsrc: "/categoryicons/gift.svg", catname: "Gift" },
    { iconsrc: "/categoryicons/food.svg", catname: "Food" },
    { iconsrc: "/categoryicons/drink.svg", catname: "Drink" },
    { iconsrc: "/categoryicons/taxi.svg", catname: "Taxi" },
    { iconsrc: "/categoryicons/shopping.svg", catname: "Shopping" },
  ];
  return (
    <>
      {!modalswitch && (
        <div className="modal bg-[#3636369a] w-full h-full" open={open}>
          <div className=" p-0 m-0 w-[800px] bg-white">
            <div className="flex justify-between border-b-[1px] px-6 py-5 ">
              <h4>Add Record</h4>
              <button onClick={closeForm}>X</button>
            </div>
            <div className="flex">
              <div className="py-4 px-6 w-[50%]">
                <div className="flex mb-4">
                  {!switch1 && (
                    <>
                      <button className="btn btn-primary w-[50%]">
                        Expense
                      </button>
                      <button
                        className="btn btn-default w-[50%]"
                        onClick={inexswitchbtn}
                      >
                        Income
                      </button>
                    </>
                  )}
                  {switch1 && (
                    <>
                      <button
                        className="btn btn-default w-[50%]"
                        onClick={inexswitchbtn}
                      >
                        Expense
                      </button>
                      <button className="btn btn-neutral w-[50%] border-[#16A34A] bg-[#16A34A]">
                        Income
                      </button>
                    </>
                  )}
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
                    <div className="label-text">Category</div>
                    <details className="dropdown w-full">
                      <summary className="m-1 btn w-full flex justify-between text-[#94A3B8] font-normal">
                        Find or choose category
                        <span>
                          <img src="/dropdownarrow.svg"></img>
                        </span>
                      </summary>
                      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-full">
                        <li>
                          <a onClick={addcategorybtn}>
                            <img src="/categoryicons/plus.svg"></img>Add
                            category
                          </a>
                        </li>
                        {categorydropdown.map((data) => {
                          return (
                            <li>
                              <a>
                                <img src={data.iconsrc}></img>
                                {data.catname}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </details>
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
                {switch1 && (
                  <button className="btn btn-primary w-full my-8 bg-[#16A34A] border-[#16A34A] rounded-full">
                    Add Record
                  </button>
                )}
                {!switch1 && (
                  <button className="btn btn-primary w-full my-8 rounded-full ">
                    Add Record
                  </button>
                )}
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
      )}
      {modalswitch && <Addcategory modalswitch={modalswitch} />}
    </>
  );
};

export default ExpenseForm;