import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { Layout } from './components/Layout'
import {ContactPage} from './pages/ContactPage'
import {ShippingPage} from './pages/ShippingPage'
import ProductCard from './components/Products/ProductCard'
import ErrorPage from './pages/ErrorPage'
//import CategoryList from './components/CategoryList';

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={ <HomePage /> } />
            <Route path='/checkout' element={ <ShippingPage /> } />
            <Route path='/contact' element={ <ContactPage /> } />
            <Route path='/products/:id' element={<ProductCard />} />
            <Route path='/error' element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
