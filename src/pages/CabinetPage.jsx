import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {removeToken} from "../store/reducers/authReducer.js";

export function CabinetPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const data = [
        {
            id: 1,
            number: "148-869",
            date: "26.11.2023",
            link: "silex.com",
            amount: "25000",
        },
        {
            id: 2,
            number: "148-869",
            date: "26.11.2023",
            link: "silex.com",
            amount: "25000",
        },
        {
            id: 3,
            number: "148-869",
            date: "26.11.2023",
            link: "silex.com",
            amount: "25000",
        },
        {
            id: 4,
            number: "148-869",
            date: "26.11.2023",
            link: "silex.com",
            amount: "25000",
        },
        {
            id: 5,
            number: "148-869",
            date: "26.11.2023",
            link: "silex.com",
            amount: "25000",
        },
    ];

    const handleClickLogOut = () => {
        dispatch(removeToken());
        navigate('/')
    }

    return (
        <div className="w-[1110px] mx-auto">
            <div className="flex w-full my-10">
                <div className="border border-black/20 rounded-[3px] p-5 min-w-[250px]">
                    <p className="font-[700] text=[16px] leading-[20px] tracking-[0.15em]">
                        ПРОФІЛЬ
                    </p>
                    <div className="h-0 border my-2"></div>

                    <Link to="/error"
                          className="font-[400] text-[14px] leading-[15px] my-4 flex">
                        <span>Особисті дані</span>
                    </Link>
                    <Link to="/error" className="font-[400] text-[14px] leading-[15px] my-4 flex">
                        <span>Мої відгуки</span>
                    </Link>
                    <div className='font-[400] text-[14px] leading-[15px] my-4 flex cursor-pointer'
                         onClick={handleClickLogOut}>
                        <span>Вийти</span>
                    </div>
                </div>
                <div className="w-full ml-10">
                    <p className="font-bold text-[24px]">Історія замовлень</p>
                    <div className="w-full border border-black/20 rounded-[3px] mt-3">
                        <div className='tableHeader flex columns-4 justify-between items-center bg-black/20 p-2 font-bold text-center'>
                            <div className="w-full">Номер</div>
                            <div className="w-full">Дата і час</div>
                            <div className="w-full">Посилання на замовлення</div>
                            <div className="w-full">Сума замовлення</div>
                        </div>
                        <div className='tableBody'>
                            {data.map((product) => (
                                <div key={product.id} className='tableRow flex columns-4 justify-between p-2 text-center'>
                                    <div className="w-full">{product.number}</div>
                                    <div className="w-full">{product.date}</div>
                                        <a href={product.link} className='w-full'>{product.link}</a>
                                    <div className="w-full">{product.amount}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CabinetPage;
