import React from 'react'
import { assets } from '../../assets/assets'

const Head = () => {
  return (
    <>

       <div id='head'>
        <img src={assets.back} alt="error" className='back'/>
        <div  className='hlo'>
            <h1 className=' font-bold text-7xl'>Order your favorite food here</h1>
            <p className='font-semibold '>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise . Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time  </p>
            <button className='border px-5 py-3 rounded-4xl bg-white text-black border-white text-xs'>View Menu</button>
        </div>
        </div> 
    </>
  )
}

export default Head