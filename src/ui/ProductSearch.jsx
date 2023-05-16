import React, {useState} from 'react';
import axios from 'axios';
import Product from "./Product.jsx";

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
        <div className='mx-auto my-5 w-2/3 relative'>
            <form onSubmit={getData}>
                <label htmlFor="default-search"
                       className="mb-2 text-sm font-medium text-gray-900 sr-only">
                    Search
                </label>
                <div className='relative'>
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                             stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <input type="text"
                           id="default-search"
                           className="block w-full p-3 pl-10 text-black border border-gray-300 rounded-lg bg-gray-50"
                           placeholder="Search Mockups, Logos..."
                           onChange={handleInputChange}
                           required
                    />
                    <button type="submit"
                            className="text-black absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-[black] font-medium rounded-lg px-4 py-2">
                        Search
                    </button>
                </div>
            </form>

            {products.length > 0 && (
                <div className='absolute border-l border-r border-b -mt-2 p-3 w-full'>
                    <div>
                        {products.map((product) => (
                            <Product key={product.id} product={product}/>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductSearch;