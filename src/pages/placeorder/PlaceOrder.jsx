import React, { useContext } from 'react'
import { StoreContent } from '../../context/StoreContent'

const PlaceOrder = () => {

const {total}=   useContext(StoreContent)
  return (
    
    <>
         <form className=' flex items-start justify-center mt-20 gap-80'>

          <div className='aa'>
            <p className=' font-bold text-2xl'>Delivery Information</p>
            <div className='flex gap-2'>
              <input type="text" placeholder='First Name' />
              <input type="text" placeholder='Last Name' />
            </div>

            <input type="text" placeholder='Email Address' />
            <input type="text" placeholder='Street' />

            <div className='flex gap-2'>
              <input type="text" placeholder='City' />
              <input type="text" placeholder='State' />
            </div>
            <div className='flex gap-2'>
              <input type="text" placeholder='Zip' />
              <input type="text" placeholder='Country' />
            </div>
          
          <input type="text" placeholder='Phone' />

          </div>
          <div>
          <div className='flex-col flex-col-3 w-[100%]'>
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

               <button className='ww' >PROCEED TO PAYMENT</button>
        </div>
          </div>
         </form>
    </>
  )
}

export default PlaceOrder