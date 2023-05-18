import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { Layout } from './components/Layout'
import {ContactPage} from './pages/ContactPage'
import {ShippingPage} from './pages/ShippingPage'
//import ProductCard from './components/Products/ProductCard1'
//import ProductsPage from "./pages/ProductsPage";
import ErrorPage from './pages/ErrorPage'
import ProductList from './components/Product/ProductList'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route path='/products/all/:id' element={<ProductList />} />
            <Route index element={ <HomePage /> } />
            <Route path='/checkout' element={ <ShippingPage /> } />
            <Route path='/contact' element={ <ContactPage /> } />
            <Route path='/error' element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
