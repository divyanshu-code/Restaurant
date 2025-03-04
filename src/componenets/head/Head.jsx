import React from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Head = () => {
  return (
    <div id='head' className='relative h-screen flex flex-col justify-between  p-6 lg:p-12'>
      <img src={assets.back} alt='error' className='absolute top-0 left-0 rounded-xl h-full object-cover -z-10' />
      <div className='max-w-4xl' id='hlo'>
        <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-32 ml-12'>Order your favorite food here</h1>
        <p className='mt-10 ml-12 text-sm sm:text-base md:text-lg font-semibold '>
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
        </p>

        <a href="#exploremenu">

        <button className='mt-6 ml-12 border px-6 py-3 rounded-3xl bg-white text-black border-white text-sm sm:text-base cursor-pointer'>View Menu</button>

        </a>
        
      </div>
    </div>
  );
};

export default Head;