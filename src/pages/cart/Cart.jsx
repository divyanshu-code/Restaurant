import React, { useContext } from 'react';
import { StoreContent } from '../../context/StoreContent';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { item, food_list, removefromcart, total } = useContext(StoreContent);
  const navigate = useNavigate();

  return (
    <div className='px-4 md:px-12 lg:px-32 mt-5'>
      <div>
        <div className='grid grid-cols-2 md:grid-cols-6 items-center text-gray-500 font-semibold text-sm md:text-base'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className='line' />
        {food_list.map((items, index) => {
          if (item[items._id] > 0) {
            return (
              <div key={index} className='grid grid-cols-2 md:grid-cols-6 items-center text-black m-1 text-sm md:text-base'>
                <img className='w-16 md:w-24' src={items.image} alt='' />
                <p>{items.name}</p>
                <p>₹{items.price}</p>
                <p>{item[items._id]}</p>
                <p>₹{items.price * item[items._id]}</p>
                <p className='cursor-pointer' onClick={() => removefromcart(items._id)}>x</p>
              </div>
            );
          }
        })}
      </div>

      <div className='mt-10 flex flex-col md:flex-row justify-between gap-10'>
        <div className='w-full md:w-1/2'>
          <h2 className='font-bold text-lg md:text-2xl'>Cart Totals</h2>
          <div className='mt-5 space-y-3 text-sm md:text-base'>
            <div className='flex justify-between'>
              <p>Subtotal</p>
              <p>₹{total()}</p>
            </div>
            <hr />
            <div className='flex justify-between'>
              <p>Delivery Fee</p>
              <p>₹{total() > 0 ? '2' : 0}</p>
            </div>
            <hr />
            <div className='flex justify-between font-bold text-black'>
              <p>Total</p>
              <p>{total() > 0 ? `₹${total() + 2}` : '₹0'}</p>
            </div>
          </div>
          <button className='mt-5 bg-red-500 text-white py-2 px-4 w-full rounded' onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>

        <div className='w-full md:w-1/2'>
          <p className='text-gray-500 font-bold text-sm md:text-base'>If you have a promo code, enter it here:</p>
          <div className='mt-3 flex items-center rounded bg-gray-200 p-2'>
            <input className='flex-1 outline-none p-2 text-sm rounded bg-transparent' type='text' placeholder='Promo code' />
            <button className='bg-black text-white p-2 text-xs md:text-sm rounded ml-2'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
