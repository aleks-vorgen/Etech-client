import React from 'react'
import { Link } from 'react-router-dom'

const NavbarHeader = () => {
  return (
    <nav>
        <div>
            <Link to="/"> Головна</Link> 
            <Link to="/checkout"> Оформити замовлення</Link>
            <Link to="/contact"> Оформити замовлення</Link>
        </div>  
    </nav>
  )
}

export default NavbarHeader