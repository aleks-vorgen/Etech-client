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
import {AdminPage} from "./pages/AdminPage.jsx";
import ShippingPage from "./pages/ShippingPage.jsx";

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={ <HomePage /> } />
            <Route path='/products/category/:category' element={<ProductList />} />
            <Route path='/products/id/:id/' element={<ProductDetails />} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/cabinet' element={ <CabinetPage /> } />
            <Route path='/contact' element={ <ContactPage /> } />
            <Route path='/error' element={<ErrorPage />} />
            <Route path='/authentication' element={<AuthPage />} />
            <Route path='/admin' element={<AdminPage />} />
            <Route path='/shipping' element={<ShippingPage />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
