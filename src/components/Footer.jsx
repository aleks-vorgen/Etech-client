import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <><div className=' bg-blue fixed bottom-0 w-full'>
      <div className='w-[1110px] mx-auto grid gap-8 pt-[50px] text-white items-center '>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
          <div className='grid m'> <span className='text-orange font-[900] font-[Lato] text-[48px] leading-[61.7px] tracking-[0.05em]'>e-tech</span> 
                <span className=' w-[255px] h-[] pt-[10px]'> 
                Lorem ipsum, sample text 
                Lorem ipsum, sample text Lorem ipsum, 
                sample text Lorem ipsum, sample text 
                Lorem ipsum, sample text Lorem ipsum, 
                sample text 
                </span>
          </div>
          <div className='grid border-l-2 border-white/30 justify-center text-center'>
            <span className='text-lg font-[600] text-[16px] uppercase'> Про компанию </span>
            <Link to="/error" className=''> Доставка </Link>
            <Link to="/checkout" className=''> Оплата </Link>
            <Link to="/contact" className=''> Контакти </Link>
          </div>
        </div>
          <div className='justify-center flex items-center border-t-2 border-white/60 py-[25px]'> 
            <span className='text-white/70' >(c) 2022 - Наш найкращий магазин</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer