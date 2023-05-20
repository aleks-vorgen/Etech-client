import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import ProductCard from "./ProductCard.jsx";
import {server} from "/src/env.js"

const ProductList = () => {
    const {category} = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let response;
                if (category !== undefined )
                    response = await axios.get(server + `/products/${category}`);
                else
                    response = await axios.get(server + `/products/all`)
                setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProducts();
    }, [category]);

    return (
        <div className="mx-auto w-[1110px] gap-4 my-10 grid grid-cols-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    );
};

export default ProductList;
