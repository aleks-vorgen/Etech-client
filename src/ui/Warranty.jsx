import React from "react";
import CheckBox from "./CheckBox";

const Warranty = () => {
  return (
    <>
      <div className="border-y border-black/20 my-5">
        <p className="my-5 font-bold">Рекомендуємо придбати:</p>
        <div className="max-w-[350px]">
          <div className="flex gap-6 justify-between">
            <CheckBox text={"Гарантія на 1 рік"} />
            <span>Від 1320 грн</span>
          </div>
          <div className="flex gap-6 mb-5 mt-2 justify-between">
            <CheckBox text={"Гарантія на 2 роки"} />
            <span>Від 1750 грн</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Warranty;
