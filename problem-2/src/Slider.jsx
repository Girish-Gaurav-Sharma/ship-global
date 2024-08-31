import React, { useState, useEffect } from 'react';
import './App.css';

const Slider = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, interval);
        return () => clearInterval(slideInterval);
    }, [currentIndex, interval]);

   const goToSlide = i => setCurrentIndex(i); 
    
    return (
        <>
        <div className="slider-container">
            <div className="slider-wrapper">
                {images.map((image, index) => (
                    <div
                        className={
                            index === currentIndex ? "slide active-slide" : "slide"
                        }
                        key={index}
                    >
                        {index === currentIndex && (
                            <img src={image} alt={`Slide ${index + 1}`} onError={e => e.currentTarget.src = "/images/download.jpeg"}/>
                        )}
                    </div>
                ))}
            </div>
            <button className="prev" onClick={prevSlide}>
                &#10094;
            </button>
            <button className="next" onClick={nextSlide}>
                &#10095;
            </button>

            
        </div>
        <div className="dots-container">
        {images.map((_, index) => (
            <span
                key={index}
                className={`dot ${index === currentIndex ? "active-dot" : ""}`}
                onClick={() => goToSlide(index)}
            ></span>
        ))}
    </div>
    </>
    );
};

export default Slider;
