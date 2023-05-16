import React from 'react'
import ProductSearch from '../ui/ProductSearch'
import {Link} from 'react-router-dom'
import NavbarHeader from '../ui/NavbarHeader'


const Header = () => {
    return (
        <>
            <div className='flex justify-between items-center px-[20%] py-[50px]'>
                <Link to="/" className='text-[#DB4F35] font-[900] text-[48px] leading-[61.7px] tracking-[0.05em]'>
                    e-tech
                </Link>
                <ProductSearch/>
            </div>
            <div className='bg-blue h-[55px]'>
                <NavbarHeader/>
            </div>
        </>
    )
}

export default Header