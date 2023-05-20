
//Карточка подробного описания товара, с отзывами и характеристиками
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`https://etech-5fydkirpga-lm.a.run.app/products/${id}`);
                setProduct(response.data);
            } catch (e) {
                console.log(e);
            }
        };
        getData();
    }, [id])

    if (!product) {
        return null;
    }

    function getPriceWithDiscount(price, discount) {
        return discount !== 0 ? price - price / 100 * discount : price;
    }

    function getSavedPrice(price, discount) {
        return price - getPriceWithDiscount(price, discount)
    }





    return (
        <div className='w-[1110px] mx-auto flex justify-center mt-20'>
            <div className='mr-10 min-w-[40%] p-5 shadow-lg '>
                <img src={`https://etech-5fydkirpga-lm.a.run.app/images/product/${product.imgPath}`} alt={product.title} className='w-full'/>
            </div>
            <div className='ml-10'>
                <h2 className='font-[700] text-[24px] pb-[40px]'>{product.title}</h2>
                <p className={product.discount > 0 ? 'font-[400] text-[16px] text-black/80 line-through ' : "font-[700] text-[24px]"}>{product.price} ₴</p>
                <div className='flex gap-4 items-baseline '>
                <p className={product.discount >= 1 ? 'font-[700] text-[28px] text-[#f84147]' : 'hidden'}>{getPriceWithDiscount(product.price, product.discount)} ₴</p>
                <p className={product.discount >= 1 ? 'font-[700] text-[18px] text-black/80 ' : 'hidden'}>{getSavedPrice(product.price, product.discount)} ₴</p>
                </div>
                <p>Виробник: {product.producer}</p>
                <p>Категорія: {product.category.title}</p>
                <p>Усе про товар: {product.description}</p>
                
            </div>
            {/* Render other product details here */}
        </div>


        // Нижняя плашка Швидко доставляємо https://jabko.ua/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-128gb--blue-
        // <CхожіТовари />

    );
};

export default ProductDetails;
