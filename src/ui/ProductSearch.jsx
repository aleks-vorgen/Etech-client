import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

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

            const response = await axios.get('https://etech-5fydkirpga-lm.a.run.app/products/all', {
                params: {title: query, producer: query}
            });

            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleInputChange = (e) => {
        const query = e.target.value;
        setQuery(query);
        if (!query.trim()) {
            setProducts([]);
        }
    };

    return (
        <div className='relative mx-auto my-5 w-2/3'>
            <form onSubmit={getData} className='flex'>
                <label htmlFor="default-search"
                       className="mb-2 text-sm font-medium text-gray-900 sr-only">
                    Search
                </label>
                <input type="text"
                       id="default-search"
                       className="block w-full mr-5 px-5 py-2 text-black rounded-sm drop-shadow z-10 active:border-none"
                       placeholder="Знайдеться все, що потрібно..."
                       onChange={handleInputChange}
                       required
                />
                <button type="submit"
                        className="text-white bg-blue rounded-sm px-3 py-2 drop-shadow">
                    <svg className="w-5 h-5 text-white" fill="none"
                         stroke="currentColor" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
            </form>

            {products.length > 0 && (
                <div className='absolute border-l border-r border-b -mt-2 p-3 w-[91.6%] z-0'>
                    {products.map((product) => (
                        <Link to={`/products/${product.id}`}
                              key={product.id}
                              className='border-b'>
                            <p>Title: {product.title}</p>
                            <p>Price: {product.price}</p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductSearch;