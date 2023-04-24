import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { AuthPage } from './pages/AuthPage'
import { HomePage } from './pages/HomePage'
import { ContactPage } from './pages/ContactPage'
import {ShippingPage } from './pages/ShippingPage'
import Header from './components/Header'

function App() {
  

  return (
    <>
        <Header />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/auth' element={ <AuthPage /> } />
        <Route path='/contact' element={ <ContactPage /> } />
        <Route path='/shipping' element={ <ShippingPage /> } />
      </Routes>
    </>
  )
}

export default App
