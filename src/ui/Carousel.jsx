import React, { useState } from "react";
import axios from "axios";

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
    fetchImages();
  }, []);

  return (
    <div class="carousel">
      <div class="carousel-items">
        {images.map((image, index) => (
          <div
            key={index}
            class="carousel-item"
            data-active={index === activeIndex}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      <div class="carousel-controls">
        <button class="carousel-control prev" onClick={handlePrev}>
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="carousel-control next" onClick={handleNext}>
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
