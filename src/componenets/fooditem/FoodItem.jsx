import React, { useContext } from 'react'
import { IoIosAdd } from "react-icons/io";
import { StoreContent } from '../../context/StoreContent';
import { assets } from '../../assets/assets';

const FoodItem = ({id,name , price , description , image}) => {

     const {item , addtocart ,  removefromcart} =useContext(StoreContent);
  return (
    <>
    <div className='fooditem'>
        <div className='relative'>
            
            <img className=' rounded-t-4xl' src={image} alt="error" />
            {!item[id] 
                    ? <IoIosAdd className='hero' onClick={()=>addtocart(id)}/>
                    : 
                     <div className='villian'> 
                     <img className='hero1' onClick={()=>removefromcart(id)} src={assets.remove} alt="error" />
                     <p className='font-semibold'>{item[id]}</p>
                     <img className='hero2' onClick={()=>addtocart(id)} src={assets.addicon} alt="error" />
                     </div> 

            }
            
        </div>

        <div className='p-5'>
            <div className='flex items-center justify-between mb-4'>
                <p className='text-xl font-semibold'>{name}</p>
                <img className='w-28' src={assets.rating} alt="error" />
            </div>
            <p className='text-xs text-gray-500 font-semibold'>{description}</p>
            <p className='mt-3 text-red-500 font-bold text-2xl'>₹{price}</p>
        </div>
    </div>
    
    </>
  )
}

export default FoodItem