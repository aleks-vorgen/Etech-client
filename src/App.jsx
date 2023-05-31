import React from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import {Layout} from './components/Layout'
import {ContactPage} from './pages/ContactPage'
import ErrorPage from './pages/ErrorPage'
import ProductList from './components/products/ProductList.jsx'
import ProductDetails from "./components/products/ProductDetails.jsx";
import CabinetPage from './pages/CabinetPage';
import {AuthPage} from "./pages/AuthPage.jsx";

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route path='/products/category/:category' element={<ProductList />} />
            <Route path='/products/id/:id/' element={<ProductDetails />} />
            <Route path='/products' element={<ProductList />} />
            <Route index element={ <HomePage /> } />
            <Route path='/checkout' element={ <CabinetPage /> } />
            <Route path='/contact' element={ <ContactPage /> } />
            <Route path='/error' element={<ErrorPage />} />
            <Route path='/authentication' element={<AuthPage/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
