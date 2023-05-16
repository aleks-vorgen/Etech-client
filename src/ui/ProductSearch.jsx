import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://etech-5fydkirpga-lm.a.run.app/products/all');
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit(e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown} // Обработчик нажатия клавиши
        />
        <button onClick={handleSearch} type="submit">Search</button>
      </form>

      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((product) => (
            <li key={product.id}>
              <Link to={`/product/${product.id}`}>
                <div>{product.title}</div>
                <div>{product.price}</div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductSearch;
