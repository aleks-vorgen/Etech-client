import React from 'react'
import ProductSearch from '../ui/ProductSearch'
import {Link} from 'react-router-dom'
import NavbarHeader from '../ui/NavbarHeader'
import {useSelector} from "react-redux";
import {AiOutlineUser} from "react-icons/all.js";
import CartModal from "./CartModal.jsx";


const Header = () => {
    const {token} = useSelector((state) => state.auth);

    return (
        <div>
            <div className='flex justify-between items-center px-[20%] py-[50px]'>
                <Link to="/"
                      className='text-orange font-[900] font-[Lato] text-[48px] leading-[61.7px] tracking-[0.05em] px-5 '>
                    SILEX
                </Link>
                <ProductSearch/>
                <CartModal />
                {token === null ?
                    <Link to={'/authentication'}>
                        <AiOutlineUser size={'30px'}/>
                    </Link>
                    :
                    <Link to={'/cabinet'}>
                        <AiOutlineUser size={'30px'}/>
                    </Link>
                }
            </div>
            <NavbarHeader/>
        </div>
    )
}

export default Header