import React from 'react'
import Coupon from '../images/HeaderImages/coupon.svg'
import Refund from '../images/HeaderImages/refund.svg'
import Shipping from '../images/HeaderImages/shipping.svg'
import SearchBar from '../ui/SearchBar'


const Header = () => {
  return (
    <>
        <div className='max-w-{20px} h-10 bg-blue mb-10 text-center pt-2 text-white underline weight-normal text-[13px] '>
            <h1>Отримайте щоденну знижку на покупки від 1000 гривень! Оновлення акції кожен день!</h1>
        </div>

        <div className='h-[100px] bg-black mb-[50px] '>
            <div className='flex items-center justify-center uppercase text-[11px] text-center weight-normal tracking-[0.01rem] '> 
                <><img src={Refund} alt="RefundHeader" /> <h1 className='mr-[35px] ml-2'>Повернення протягом 30 днів</h1></>
                <><img src={Shipping} alt="ShippingHeader" /> <h1 className='mr-[35px] ml-2'>безкоштовна доставка</h1></>
                <><img src={Coupon} alt="CouponHeader" /> <h1 className='ml-2'>Купон на 500 грн. кожному</h1></>
            </div>

            <div className='w-[1110px] mx-auto flex '> 
                <h1 className=' text-orange font-black leading-[50px] text-[48px]'> e-tech</h1>
                <SearchBar />

            </div>

        </div>

        <div className='bg-blue h-[55px]'>

        </div>
    </>
  )
}

export default Header

 