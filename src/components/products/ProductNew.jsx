import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import ProductCard from "./ProductCard.jsx";
import {server} from "/src/env.js"

const ProductNew = () => {
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
        <div>
            <p className='flex w-[1110px] mx-auto font-bold text-[24px] mt-10'>Нові надходження</p>
            <div className="mx-auto w-[1110px] gap-4 mt-3 grid grid-cols-4 ">
            {products.map((product, index) => (
                index < 4 && <ProductCard key={product.id} product={product}/>
            ))}
        </div>
        </div>
       
    );
};

export default ProductNew