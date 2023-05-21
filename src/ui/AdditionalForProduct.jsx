import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { FaExchangeAlt } from "react-icons/fa";
import { BsCreditCardFill } from "react-icons/bs";

const AdditionalForProduct = () => {
  return (
    <div className='flex text-[16px] '>
        <div className='flex items-center transition-transform hover:scale-105 hover:text-[#000]/70 '> <TbTruckDelivery className='w-[40%] h-[60%] '/> <span>Доставимо цей товар швидко</span> </div>
        <div className='flex items-center transition-transform hover:scale-105 hover:text-[#000]/70'> <BsCreditCardFill className='w-[40%] h-[50%] '/> Різні види оплати</div>
        <div className='flex items-center transition-transform hover:scale-105 hover:text-[#000]/70'> <FaExchangeAlt className='w-[40%] h-[50%] '/> Повернення протягом 14 днів</div>
    </div>
  )
}

export default AdditionalForProduct