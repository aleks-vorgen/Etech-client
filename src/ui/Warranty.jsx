import React from "react";
import CheckBox from "./CheckBox";

const Warranty = () => {
  return (
    <>
      <div className="border-y-2 border-black/20 my-5">
        <p className="my-5 font-bold">Рекомендуємо придбати:</p>
        <div className="flex gap-6 ">
          <CheckBox text={"Гарантія на 1 рік"} /> 
          <span>Від 1320 грн</span>
        </div>
        <div className="flex gap-6 mb-5 mt-2">
          <CheckBox text={"Гарантія на 1 рік"} /> 
          <span>Від 1320 грн</span>
        </div>
      </div>
    </>
  );
};

export default Warranty;
