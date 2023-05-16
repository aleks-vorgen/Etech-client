import React from 'react'
import ProductSearch from '../ui/ProductSearch'
import { Link } from 'react-router-dom'
import NavbarHeader from '../ui/NavbarHeader'


const Header = () => {
  return (
    <>
    <nav>
        <div>
            <div className='max-w-6xl flex justify-center'>
                <div className = "text-[#DB4F35] font-[900] text-[48px] leading-[61.7px] tracking-[0.05em]">
                    <Link to = "/">
                        <span>e-tech</span>
                    </Link>
                </div>
                <div className='box-border rounded-[3px] border-[1px solid #DCDCDC]'>
                    <ProductSearch />
                </div>
            </div>
            <div className='bg-blue h-[55px]'>
                <NavbarHeader />
            </div>
        </div>   
    </nav> 
    </>
  )
}

export default Header