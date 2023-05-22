import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

      const response = await axios.get(
        'https://etech-5fydkirpga-lm.a.run.app/products/all',
        {
          params: { title: query, producer: query }
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
        <input
          type="text"
          id="default-search"
          className="block w-full mr-5 px-5 py-2 text-black rounded-sm drop-shadow z-10 active:border-none"
          placeholder="Знайдеться все, що потрібно..."
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="text-white bg-blue rounded-sm px-3 py-2 drop-shadow"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 25 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </form>
      {products.length > 0 && (
        <div className="absolute -mt-2 -ml-8 p-3 w-full">
          {products.map((product) => (
            <Link
              to={`/products/id/id=${product.id}`}
              key={product.id}
              className="block border-b bg-black/30 px-5 py-2 backdrop-blur-sm"
              onClick={handleProductClick}
            >
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
