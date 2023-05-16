import React, { useState } from 'react';
import axios from 'axios';

const ProductSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSearch = async () => {
    try {
      if (searchQuery.trim() === '') {
        setProducts([]);
        return;
      }

      const response = await axios.get('https://etech-5fydkirpga-lm.a.run.app/products/all');
      const filteredProducts = response.data.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setProducts(filteredProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    // Redirect to the product page
    window.location.href = `/products/${product.id}`;
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === '') {
      setProducts([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Search for a product"
      />

      {selectedProduct && (
        <div>
          <h2>{selectedProduct.title}</h2>
          <p>Price: ${selectedProduct.price}</p>
          <p>Description: {selectedProduct.description}</p>
          {/* Render other product details here */}
        </div>
      )}

      {products.length > 0 ? (
        <div>
          {products.map((product) => (
            <div key={product.id} onClick={() => handleProductClick(product)}>
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              {/* Render other product details here */}
            </div>
          ))}
        </div>
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default ProductSearch;
