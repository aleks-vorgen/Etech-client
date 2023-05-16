import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { Layout } from './components/Layout'
import {ContactPage} from './pages/ContactPage'
import {ShippingPage} from './pages/ShippingPage'
import ProductCard from './components/Products/ProductCard'
import {ProductsPage} from "./pages/ProductsPage.jsx";



function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route path='/products' element={<ProductsPage />} />
            <Route index element={ <HomePage /> } />
            <Route path='/checkout' element={ <ShippingPage /> } />
            <Route path='/contact' element={ <ContactPage /> } />
            <Route path='/products/:id' element={<ProductCard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
