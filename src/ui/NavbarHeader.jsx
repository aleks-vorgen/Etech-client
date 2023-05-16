import React from 'react'
import {Link} from 'react-router-dom'

const NavbarHeader = () => {
    return (
        <div className='w-[1110px] mx-auto flex gap-8 text-white items-center'>
            <Link to="/products" className='py-3'>Всі категорії</Link>
            <Link to="/" className='py-3'>Головна</Link>
            <Link to="/checkout" className='py-3'>Оформити замовлення</Link>
            <Link to="/contact" className='py-3'>Контакти</Link>
        </div>
    )
}

export default NavbarHeader