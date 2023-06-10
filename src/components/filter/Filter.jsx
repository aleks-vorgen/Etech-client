import React from 'react'
import RangeSlider from "./RangeSlider.jsx";

export default function Filter({priceRange}) {


    return (
        <div className='my-10 h-max w-min mx-auto border border-black/20 rounded-[3px] p-5'>
            <p className='font-[700] text=[16px] leading-[20px] tracking-[0.15em]'>ФІЛЬТРИ</p>
            <div className='h-0 border my-2'></div>
            <div className='flex gap-10'>
                <RangeSlider priceRange={priceRange}/>

            </div>
        </div>
    )
}