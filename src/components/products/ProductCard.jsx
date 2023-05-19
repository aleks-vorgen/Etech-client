import React from 'react';
import {Link} from "react-router-dom";

const ProductCard = ({product}) => {

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <Link to={`/products/id/id=${product.id}`}>
            <img src={product.imgPath} alt={product.imgPath} />
            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
        </Link>
    );
};

export default ProductCard;