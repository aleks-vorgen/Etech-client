//Карточка подробного описания товара, с отзывами и характеристиками
import React, { useEffect, useState } from "react";
import axios from "axios";
import {server, local} from "/src/env.js"
import { useParams } from "react-router-dom";
import Warranty from "../../ui/Warranty";
import Button from "../../ui/Button";
import AdditionalForProduct from "../../ui/AdditionalForProduct";
import AboutProduct from "../../ui/AboutProduct";
import ProductSame from "./ProductSame";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    `https://etech-5fydkirpga-lm.a.run.app/products/${id}`
                );
                setProduct(response.data);
            } catch (e) {
                console.log(e);
            }
        };
        getData();
    }, [id]);

    if (!product) {
        return null;
    }

    function getPriceWithDiscount(price, discount) {
        return discount !== 0 ? price - (price / 100) * discount : price;
    }

    function getSavedPrice(price, discount) {
        return price - getPriceWithDiscount(price, discount);
    }

    return (
        <div>
            <div className="w-[1110px] mx-auto flex justify-center my-10">
                <div className="mr-10 min-w-[40%] p-5 shadow-lg ">
                    <img src={`${server}/images/product/${product.imgPath}`}
                        alt={product.title} className="w-full"/>
                </div>

                <div className="ml-10">
                    <h2 className="font-[700] text-[24px]">{product.title}</h2>
                    <p className='border border-black/30 px-2 text rounded-[3px] mb-10 ml-auto w-min'>{product.producer}</p>
                    <p className={product.discount > 0 ?
                        "font-[400] text-[16px] text-black/80 line-through " : "font-[700] text-[24px]"}>
                        {product.price} ₴
                    </p>
                    <div className="border border-[#00bc52]/60 rounded-[3px] p-1 float-right text-[#00bc52]">В наявності</div>
                    {product.discount > 0 && (
                        <div className="flex gap-4 items-baseline ">
                            <p className="font-[700] text-[28px] text-[#f84147]">
                                {getPriceWithDiscount(product.price, product.discount)} ₴
                            </p>
                            <p className="font-[700] text-[18px] text-black/80">
                                {getSavedPrice(product.price, product.discount)} ₴
                            </p>
                        </div>
                    )}
                    <Warranty />
                    <AdditionalForProduct />
                    <Button />
                </div>
            </div>
            <div className=" w-[1110px] mx-auto flex justify-center mt-20">
                <AboutProduct />
            </div>
            <div className=" w-[1110px] mx-auto flex justify-center mt-0">
                <ProductSame />
            </div>
        </div>
    );
};

export default ProductDetails;
