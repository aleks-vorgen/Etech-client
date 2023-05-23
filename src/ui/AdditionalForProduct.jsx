import React from 'react'
import {TbTruckDelivery} from "react-icons/tb";
import {FaExchangeAlt} from "react-icons/fa";
import {BsCreditCardFill} from "react-icons/bs";

const AdditionalForProduct = () => {
    return (
        <div className='flex justify-between w-full text-[16px] border-b border-black/20 pb-4'>
            <div className='flex items-center transition-transform hover:scale-105 cursor-pointer'>
                <TbTruckDelivery className='w-[32px] h-[48px]'/>
                <p className='transition-transform hover:text-[#000]/70 ml-3'>Доставимо цей товар швидко</p>
            </div>
            <div className='flex items-center transition-transform hover:scale-105 cursor-pointer'>
                <BsCreditCardFill className='w-[32px] h-[48px]'/>
                <p className='transition-transform hover:text-[#000]/70 ml-3'>Різні види оплати</p>
            </div>
            <div className='flex items-center transition-transform hover:scale-105 cursor-pointer'>
                <FaExchangeAlt className='w-[32px] h-[48px]'/>
                <p className='transition-transform hover:text-[#000]/70 ml-3'>Повернення протягом 14 днів</p>
            </div>
        </div>
    )
}

export default AdditionalForProduct