import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import './imageUploader.css';

const ImageUploader = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleLeftImg = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleRightImg = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 3));
  };

  return (
    <div className='mt-5 flex flex-col items-center'>
      <div className='flex flex-row items-center gap-[240px]'>
        <button className='bg-[#171717] rounded-[23px] pt-[16px] pb-[16px] pl-[40px] pr-[40px] font-[500] font-poppins'>Gallery</button>
        <div className='flex gap-4'>
          <label className="btn1 px-4 rounded-full cursor-pointer text-sm font-semibold py-3">
            +ADD IMAGE
            <input 
              type="file" 
              accept="image/*" 
              multiple 
              onChange={handleImageUpload} 
              className="hidden" 
            />
          </label>
          <button onClick={handleLeftImg} className='arrBtn'>
            <FaArrowLeft />
          </button>
          <button onClick={handleRightImg} className='arrBtn'>
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="imgCont">
        <div 
          className="imgWrapper"
          style={{ 
           
            transform: `translateX(-${currentIndex * 200}px)` 
          }}
        >
          {images.map((image, index) => (
            <img className='' key={index} src={image} alt={`slide-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
