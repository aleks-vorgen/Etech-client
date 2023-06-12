import React from 'react'
import CategoryList from '../components/categories/CategoryList.jsx';
import Carousel from "../ui/Carousel.jsx";
import ProductPopular from '../components/products/ProductPopular.jsx';
import ProductNew from '../components/products/ProductNew.jsx';

export function HomePage() {

    return (
        <div className='my-10 w-[1110px] mx-auto'>
            <div className='flex'>
                <CategoryList/>
                <Carousel/>
            </div>
            <ProductPopular/>
            <ProductNew/>
        </div>
    )
}

export default HomePage