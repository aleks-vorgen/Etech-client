import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {server} from "../env.js";

const ProductSearch = () => {
    const [query, setQuery] = useState('');
    const [products, setProducts] = useState([]);

    const getData = async (e) => {
        e.preventDefault();
        try {
            if (!query.trim()) {
                setProducts([]);
                return;
            }

            const response = await axios.get(
                'https://etech-5fydkirpga-lm.a.run.app/products/all',
                {
                    params: {title: query, producer: query}
                }
            );

            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        if (!query.trim()) {
            setProducts([]);
        }
    };

    const handleProductClick = () => {
        setProducts([]);
    };

    return (
        <div className="relative mx-auto my-5 w-2/4">
            <form onSubmit={getData} className="flex">
                <div className='w-full relative'>
                    <input type="text" id="default-search"
                           className="block w-full px-5 py-2 text-black rounded-sm drop-shadow active:border-none"
                           placeholder="Знайдеться все, що потрібно..." onChange={handleInputChange}/>

                    {products.length > 0 && (
                        <div
                            className="absolute w-full bg-white border border-black/10 rounded-b-[3px] active:shadow-inner z-10">
                            {products.map((product) => (
                                <Link to={`/products/id/id=${product.id}`} key={product.id}
                                      className="flex border-b border-black/10 p-3 last:border-none"
                                      onClick={handleProductClick}>
                                    <img src={`${server}/images/product/${product.imgPath}`} alt="" className='w-[10%] h-min'/>
                                    <div className='flex flex-col pl-3 w-full'>
                                    <p>{product.title}</p>
                                    <p className='text-right'>{product.price} ₴</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                <button type="submit"
                        className="text-white ml-5 bg-blue rounded-sm px-3 py-2 drop-shadow transition-colors active:bg-clicked-blue">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor"
                         viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
            </form>

        </div>
    );
};

export default ProductSearch;
