import React, { useContext } from 'react';
import { IoIosAdd } from 'react-icons/io';
import { StoreContent } from '../../context/StoreContent';
import { assets } from '../../assets/assets';

const FoodItem = ({ id, name, price, description, image }) => {
  const { item, addtocart, removefromcart } = useContext(StoreContent);

  return (
    <div className='fooditem bg-white shadow-lg rounded-lg overflow-hidden max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'>
      <div className='relative'>
        <img className='w-full h-48 object-cover rounded-t-lg' src={image} alt='error' />
        {!item[id] ? (
          <IoIosAdd className='absolute text-4xl bg-white bottom-2 right-2 p-2 rounded-full  cursor-pointer' onClick={() => addtocart(id)} />
        ) : (
          <div className='absolute bottom-2 right-2 flex items-center space-x-2 bg-white p-2 rounded-lg shadow-md'>
            <img className='w-6 cursor-pointer' onClick={() => removefromcart(id)} src={assets.remove} alt='error' />
            <p className='font-semibold'>{item[id]}</p>
            <img className='w-6 cursor-pointer' onClick={() => addtocart(id)} src={assets.addicon} alt='error' />
          </div>
        )}
      </div>

      <div className='p-4'>
        <div className='flex items-center justify-between mb-2'>
          <p className='text-lg md:text-xl font-semibold'>{name}</p>
          <img className='w-20 md:w-28' src={assets.rating} alt='error' />
        </div>
        <p className='text-sm md:text-base text-gray-500 font-semibold'>{description}</p>
        <p className='mt-3 text-red-500 font-bold text-xl md:text-2xl'>₹{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
