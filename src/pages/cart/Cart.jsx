import React, { useContext, useState } from 'react'
import { StoreContent } from '../../context/StoreContent'
import { useNavigate } from 'react-router-dom'


const Cart = () => {

    const {item , food_list, removefromcart , total} = useContext(StoreContent)

    const navigate =useNavigate()

  return (
    <>
     <div className='ml-37 mr-32 mt-5'>
      <div>
        <div className='grid grid-cols-6 items-center text-gray-500 font-semibold'>
          <p >Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className='line' />
        {food_list.map((items, index)=>{
            
            if(item[items._id]>0){

                return (
                      <>
                      
                     <div key={index} className='grid grid-cols-6 items-center text-black m-1'>
                       <img className='w-[50%] ' src={items.image} alt="" />
                       <p>{items.name}</p>
                       <p>₹{items.price}</p>
                       <p>{item[items._id]}</p>
                       <p>₹{items.price*item[items._id]}</p>
                       <p className='cursor-pointer' onClick={()=>removefromcart(items._id)}>x</p>
                     </div>
                     <hr className='line'/>
                      </>
                )
            }
        })}
      </div>

      <div className='mt-20 flex justify-between gap-10'>
        <div className='flex-col flex-col-3'>
               <h2 className='font-bold text-2xl'>Cart Totals</h2>
               <div className='mt-5 '>
                     <div className='qq'>
                      <p>Subtotal</p>
                      <p>₹{total()}</p>
                     </div>
                     <hr />
                     <div className='qq'>
                      <p>Delivery Fee</p>
                      <p>₹{total()>0?'2' :0}</p>
                     </div>
                     <hr />
                     <div className='qq '>
                      <b className='text-black'>Total</b>
                      <b className='text-black'>  { total()>0 ?  '₹' :0  } {total()>0 ? total()+2 :""}</b>
                     </div>
               </div>

               <button className='ww'  onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>

        <div className='flex-col-3'>
          <div >
            <p className='text-gray-500 font-bold mr-72'> If you have a promo code , Enter it here</p>
          </div>

          <div className='mt-3 flex justify-between items-center rounded bg-gray-200'>
            <input className='outline-none rounded p-3 text-xs font-semibold' type="text" placeholder='Promo code' />
            <button className='bg-black p-3 text-white rounded  text-xs w-36 font-semibold cursor-pointer'>Submit</button>
          </div>
        </div>
      </div>
     </div>
     

    </>
  )
}

export default Cart