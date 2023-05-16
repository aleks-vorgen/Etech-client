import React from 'react'
import ProductSearch from '../ui/ProductSearch'
import { Link } from 'react-router-dom'
import NavbarHeader from '../ui/NavbarHeader'


const Header = () => {
  return (
    <>
    <div>
        <div>
            <div>
                <div className = "text-[#DB4F35] font-[900] text-[48px] leading-[61.7px] tracking-[0.05em]">
                    <Link to = "/">
                        <span>e-tech</span>
                    </Link>
                </div>
                <div className=' mx-auto py-8'>
                    <ProductSearch />
                </div>
            </div>
            <nav className='bg-blue h-[55px] text-zinc-50'>
                <NavbarHeader />
            </nav>
        </div>   
    </div> 
    </>
  )
}

export default Header