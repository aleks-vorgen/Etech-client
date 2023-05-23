import React from 'react'
import ProductSearch from '../ui/ProductSearch'
import {Link} from 'react-router-dom'
import NavbarHeader from '../ui/NavbarHeader'
import CartItem from './cart/CartItem'


const Header = () => {
    return (
        <div>
            <div className='flex justify-between items-center px-[20%] py-[50px]'>
                <Link to="/" className='text-orange font-[900] font-[Lato] text-[48px] leading-[61.7px] tracking-[0.05em] px-5 '>
                    SILEX
                </Link>
                <ProductSearch/>
                <CartItem />
            </div>
                <NavbarHeader/>
        </div>
    )
}

export default Header