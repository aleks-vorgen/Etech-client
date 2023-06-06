import React, {useEffect, useState} from "react";
import axios from "axios";
import {local} from "/src/env.js"
import {useParams} from "react-router-dom";
import Warranty from "../../ui/Warranty";
import AdditionalForProduct from "../../ui/AdditionalForProduct";
import AboutProduct from "../../ui/AboutProduct";
import ProductSame from "./ProductSame";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../store/reducers/cartReducer.js";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    local + `/products/${id}`
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

    function handleClickBuy() {
        dispatch(addToCart(product));
    }

    return (
        <div>
            <div className="w-[1110px] mx-auto flex justify-center my-10">
                <div className="mr-10 min-w-[40%] p-5 shadow-lg ">
                    <img src={local + `/images/product/${product.imgPath}`}
                        alt={product.title} className="w-full"/>
                </div>

                <div className="ml-10">
                    <h2 className="font-[700] text-[24px]">{product.title}</h2>
                    <div className="flex gap-4 mt-4">
                    <p className='border border-black/30 p-1 text rounded-[3px] mb- ml-auto w-min'>{product.producer}</p>
                    <div className="border border-[#00bc52]/60 rounded-[3px] p-1 float-right text-[#00bc52]">В наявності</div>
                    </div>
                    
                    <p className={product.discount > 0 ?
                        "font-[400] text-[16px] text-black/80 line-through " : "font-[700] text-[24px]"}>
                        {product.price} ₴
                    </p>
                   
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
                    <button className='button orange-button mt-4' onClick={handleClickBuy}>
                        Купити
                    </button>
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
