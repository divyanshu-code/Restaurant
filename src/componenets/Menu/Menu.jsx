import React from 'react';
import { menu_list } from '../../assets/assets';

const Menu = ({ category, setmenu }) => {
  return (
    <div className='flex flex-col gap-5 px-6 md:px-12 lg:px-24 mt-16' id='exploremenu'>
      <h1 className='text-3xl md:text-4xl font-bold'>Explore our menu</h1>
      <p className='max-w-5xl font-semibold text-sm md:text-base mt-5'>
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>
      <div id='neo' className='flex items-center justify-start overflow-x-scroll gap-20 p-5'>
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() => setmenu((prev) => (prev === item.menu_name ? 'All' : item.menu_name))}
            className='flex flex-col items-center cursor-pointer' 
          >
            <img className={`w-24 h-24 md:w-32 md:h-32 rounded-full transition-transform ${category === item.menu_name ? 'Active' : 'scale-100'}`} src={item.menu_image} alt='error' />
            <p className='text-center text-gray-400 font-semibold text-xs md:text-sm mt-2'>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr className='border  h-0 m-5' />
    </div>
  );
};

export default Menu;
