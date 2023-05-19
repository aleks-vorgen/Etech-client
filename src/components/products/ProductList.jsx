import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import ProductCard from "./ProductCard.jsx";

const ProductList = () => {
    const {category} = useParams();
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    `https://etech-5fydkirpga-lm.a.run.app/products/${category}`
                );
                console.log(category)
                console.log(response.data)
                setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProducts();
    }, [category]);

    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    );
};

export default ProductList;
