import React from "react";
import { Link } from "react-router-dom";

export function CabinetPage() {
  const data = [
    {
      id: 1,
      number: "148-869",
      date: "26.11.2023",
      link: "silex.com",
      amoont: "25000",
    },
    {
      id: 2,
      number: "148-869",
      date: "26.11.2023",
      link: "silex.com",
      amoont: "25000",
    },
    {
      id: 3,
      number: "148-869",
      date: "26.11.2023",
      link: "silex.com",
      amoont: "25000",
    },
    {
      id: 4,
      number: "148-869",
      date: "26.11.2023",
      link: "silex.com",
      amoont: "25000",
    },
    {
      id: 5,
      number: "148-869",
      date: "26.11.2023",
      link: "silex.com",
      amoont: "25000",
    },
  ];
  return (
    <div className="w-[1110px] mx-auto  ">
      <div className="flex w-full ">
        <div className="w-[25%] border border-[lightGray] rounded-[3px] my-10 py-7 px-7 min-w-[250px]">
          <p className="font-[700] text=[16px] leading-[20px] tracking-[0.15em]">
            ПРОФІЛЬ
          </p>
          <div className="h-0 border my-2"></div>

          <Link
            to="/error"
            className="font-[400] text-[14px] leading-[15px] my-4 flex"
          >
            <span>Особисті дані</span>
          </Link>
          <Link
            to="/error"
            className="font-[400] text-[14px] leading-[15px] my-4 flex"
          >
            <span>Мої відгуки</span>
          </Link>
        </div>
        <div className=" w-full  mx-10 my-10 ">
          <span className="font-bold text-[24px]">Історія замовлень</span>
          <div className="grid grid-cols-4 w-[100%] bg-bl border border-black/20 mt-4 pl-">
            <div className="bg-black/20 p-2 font-bold pl-4">Номер</div>
            <div className="bg-black/20 p-2 font-bold">Дата і час</div>
            <div className="bg-black/20 p-2 font-bold">Посилання на замовлення</div>
            <div className="bg-black/20 p-2 font-bold">Сума замовлення</div>

            {data.map((product) => (
              <React.Fragment key={product.id}>
                <div className="p-2 pl-4">{product.number}</div>
                <div className="p-2">{product.date}</div>
                <div className="p-2">
                  <a href={product.link}>{product.link}</a>
                </div>
                <div className="p-2">{product.amoont}</div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CabinetPage;
