import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

const ProductCard = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`https://etech-5fydkirpga-lm.a.run.app/products/${id}`)
                setProduct(response.data);
            } catch (e) {
                console.log(e);
            }
        };

        getData();
    }, [id])


    if (!product) {
        return <div>Loading...</div>;
    }

    function getPriceWithDiscount(price, discount) {
        return discount !== 0 ? price - price / 100 * discount: price;
    }

    return (
        <div className='w-[1110px] mx-auto flex justify-center mt-20'>
            <div className='mr-10'>
                <img src={product.imgPath} alt={product.title} className=''/>
            </div>
            <div className='ml-10'>
                <h2 className='font-[Montserrat] font-[700] text-[18px]'>{product.title}</h2>
                <p>Ціна: {product.price}</p>
                <p>Знижка: {product.discount}%</p>
                <p>Ціна зі знижкою: {getPriceWithDiscount(product.price, product.discount)}</p>
                <p>Producer: {product.producer}</p>
                <p>Category: {product.category.parentCategory !== null ?
                    product.category.parentCategory.title + ' \\ ' + product.category.title :
                    product.category.title}</p>
                <p>Description: {product.description}</p>

            </div>
            {/* Render other product details here */}
        </div>
    );
};

export default ProductCard;
