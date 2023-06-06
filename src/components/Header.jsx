import React from 'react'
import ProductSearch from '../ui/ProductSearch'
import {Link} from 'react-router-dom'
import NavbarHeader from '../ui/NavbarHeader'
import {useSelector} from "react-redux";
import {CiUser} from "react-icons/all.js";
import CartModal from "./CartModal.jsx";


const Header = () => {
    const {token} = useSelector((state) => state.auth);

    return (
        <div className='min-w-[1110px]'>
            <div className='flex justify-between items-center px-[20%] py-[50px]'>
                <Link to="/"
                      className='text-orange font-[900] font-[Lato] text-[48px] leading-[61.7px] tracking-[0.05em] px-5 '>
                    SILEX
                </Link>
                <ProductSearch/>
                <div className='flex rounded-[3px] p-1 shadow'>
                    <CartModal/>
                    {token === null ?
                        <Link to={'/authentication'}
                              className='block px-3 rounded-[3px] hover:bg-blue/10 transition-all duration-400 active:bg-clicked-blue/20'>
                            <CiUser size={'35px'} fill={'#1E5DDB'}/>
                        </Link>
                        :
                        <Link to={'/cabinet'}
                              className='block px-3 rounded-[3px] hover:bg-blue/10 transition-all duration-400 active:bg-clicked-blue/20'>
                            <CiUser size={'35px'} fill={'#1E5DDB'}/>
                        </Link>
                    }
                </div>
            </div>
            <NavbarHeader/>
        </div>
    )
}

export default Header