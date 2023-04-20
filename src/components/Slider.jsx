import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import SliderControls from './SliderControls';

const Slider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = (newIndex) => setCurrentIndex(newIndex);

  const nextSlide = (newIndex) => setCurrentIndex(newIndex);

    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };
  
    return (
      <div className='max-w-[1400px] h-[600px] w-full m-auto py-16 px-4 relative group'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        />

<SliderControls
            currentIndex={currentIndex}
            slides={slides}
            onPrevSlide={prevSlide}
            onNextSlide={nextSlide}
          />
        
        
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`hidden lg:block md:block text-xs mr-3 cursor-pointer ${
                slideIndex === currentIndex ? 'text-gray-500' : 'text-hergo-red'
              }`}
            >
            <FontAwesomeIcon icon={faCircle} className="text-sm" />

            </div>
          ))}
        </div>
      </div>
    );
};

export default Slider;