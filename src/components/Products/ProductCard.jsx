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
                setProduct(response.data)
                l
            } catch (e) {
                console.log(e);
            }
        };

        getData();
    }, [id])


    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className='w-[1000px] mx-auto flex justify-center mt-20'>
            <div className='mr-10'>
                <img src={product.imgPath} alt={product.title} className=''/>
            </div>
            <div className='ml-10'>
                <h2 className='font-[Montserrat] font-[700] text-[18px]'>{product.title}</h2>
                <p>Price: {product.price}</p>
                <p>Producer: {product.producer}</p>
            </div>
            {/* Render other product details here */}
        </div>
    );
};

export default ProductCard;
