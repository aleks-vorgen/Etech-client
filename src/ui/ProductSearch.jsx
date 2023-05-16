import React, {useState} from 'react';
import axios from 'axios';

const ProductSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            if (searchQuery.trim() === '') {
                setProducts([]);
                return;
            }

            const response = await axios.get('https://etech-5fydkirpga-lm.a.run.app/products/all', {
                params: {
                    title: searchQuery,
                    producer: searchQuery
                }
            }).catch(e => {
                console.log(e)
            })

            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
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
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                    placeholder="Search for a product"
                />
            </form>

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
                            <p>Price: {product.price}</p>
                            <p>Producer: {product.producer}</p>
                            {/* Render other product details here */}
                        </div>
                    ))}
                </div>
            ) : <div></div>}
        </div>
    );
};

export default ProductSearch;
