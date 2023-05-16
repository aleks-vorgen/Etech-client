import React from 'react'
import { Link } from 'react-router-dom'

const NavbarHeader = () => {
  return (
    <div className='text-xl'>
        <div>
            <Link to="/"> Головна</Link> 
            <Link to="/checkout"> Оформити замовлення</Link>
            <Link to="/contact"> Контакти</Link>
        </div>  
    </div>
  )
}

export default NavbarHeader