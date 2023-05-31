import React from 'react'
import ProductSearch from '../ui/ProductSearch'
import {Link} from 'react-router-dom'
import NavbarHeader from '../ui/NavbarHeader'
import CartItem from './cart/CartItem'


const Header = () => {
    return (
        <div>
            <div className='flex justify-between items-center px-[20%] py-[50px]'>
                <Link to="/"
                      className='text-orange font-[900] font-[Lato] text-[48px] leading-[61.7px] tracking-[0.05em] px-5 '>
                    SILEX
                </Link>
                <ProductSearch/>
                <CartItem/>
                <button type="button" className="py-2 px-2 border border-black/20 text-black rounded-[3px]"
                        data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <Link to={"/authentication"}>LogIn</Link>
                </button>
            </div>
            <NavbarHeader/>
        </div>
    )
}

export default Header