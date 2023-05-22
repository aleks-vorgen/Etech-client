import React, {useEffect, useState} from "react";
import axios from "axios";
import {server} from "../env.js";
import "./Carousel.css"

const Carousel = () => {
    const [images, setImages] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const fetchImages = async () => {
        try {
            const response = await axios.get("https://placecage.com/1000/600/3");
            const data = response.data;
            setImages(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        setImages([
            {index: 1, src: server + '/images/product/1.png'},
            {index: 2, src: server + '/images/product/2.png'},
            {index: 2, src: server + '/images/product/3.png'},
            {index: 2, src: server + '/images/product/4.png'},
            {index: 2, src: server + '/images/product/5.png'},
            {index: 2, src: server + '/images/product/6.png'},
        ])
        //fetchImages();
    }, []);

    return (
        <div className="carousel">
            <div className="carousel-items">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={activeIndex === index ? 'carousel-item' : 'carousel-item hidden'}
                        data-active={index === activeIndex}
                    >
                        <img src={image.src} alt={image.alt}/>
                    </div>
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
