import React from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import {Layout} from './components/Layout'
import {ContactPage} from './pages/ContactPage'
import {ShippingPage} from './pages/ShippingPage'
import ErrorPage from './pages/ErrorPage'
import ProductList from './components/products/ProductList.jsx'
import ProductDetails from "./components/products/ProductDetails.jsx";

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route path='/products/category/:category' element={<ProductList />} />
            <Route path='/products/id/:id' element={<ProductDetails />} />
            <Route index element={ <HomePage /> } />
            <Route path='/checkout' element={ <ShippingPage /> } />
            <Route path='/contact' element={ <ContactPage /> } />
            <Route path='/error' element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
