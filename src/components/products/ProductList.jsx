import React, {useEffect, useState} from 'react';
import ProductCard from "./ProductCard.jsx";
import Filter from "../filter/Filter.jsx";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

function getMinPrice(products) {
    const prices = products.map(product => product.price)
    return Math.min(...prices)
}

function getMaxPrice(products) {
    const prices = products.map(product => product.price)
    return Math.max(...prices)
}

export default function ProductList() {
    const {category} = useParams()
    const {catalog} = useSelector((state) => state.catalog);
    const [products, setProducts] = useState(catalog)

    useEffect(() => {
        if (category)
            setProducts(catalog.filter(item => item.category.title === category))
        else
            setProducts(catalog)
    }, [catalog, category])

    return (
        <div className='w-[1110px] mx-auto'>
            <div className="my-10 gap-4 grid grid-cols-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    );
};