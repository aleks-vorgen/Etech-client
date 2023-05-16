import React from 'react'
import { Outlet } from 'react-router'
import NavbarHeader from '../ui/NavbarHeader'
import Header from './Header'
import Footer from './Footer'
const Layout = () => {
  return (
    <>
        <Header />
        <NavbarHeader />
        <Outlet />
        <Footer />
    </>
  )
}

export {Layout}