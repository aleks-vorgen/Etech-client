import React from 'react'
import {Link} from 'react-router-dom'

const NavbarHeader = () => {
    return (
        <div className='w-full mx-auto flex gap-8 text-white bg-blue items-center' style={{padding: '0 calc(50% - 555px)'}}>
            <Link to="/products" className='py-3'>Каталог</Link>
            <Link to="/" className='py-3'>Головна</Link>
            <Link to="/checkout" className='py-3'>Оформити замовлення</Link>
            <Link to="/contact" className='py-3'>Контакти</Link>
        </div>
    )
}

export default NavbarHeader