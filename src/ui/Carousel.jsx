import React, {useEffect, useState} from "react";
import axios from "axios";
import {local, server} from "../env.js";
import "./Carousel.css"
import {Link} from "react-router-dom";

const Carousel = () => {
    const [products, setProducts] = useState([])
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get(local + '/products/offers').catch(console.log);
            setProducts(response.data);
        }
        fetchProducts();
    }, []);

    return (
        <div className="carousel">
            <div className="carousel-items">
                {products.map((product, index) => (
                    <Link to={`/products/id/id=${product.id}`} key={index}
                          className={activeIndex === index ? 'carousel-item' : 'carousel-item hidden'}
                          data-active={index === activeIndex}>
                        <img src={local + `/images/product/${product.imgPath}`} alt={product.title}/>
                    </Link>
                ))}
            </div>
            <div className="carousel-controls">
                <button className="carousel-control prev" onClick={handlePrev}>
                    <p></p>
                </button>
                <button className="carousel-control next" onClick={handleNext}>
                    <p></p>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
