import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { assets } from '../../assets/assets';


const Footer = () => {

  return (
    
    <>
     <div className='upperfooter' id='footer'>
        <div className='footer'>
           <div className='leftfooter'>
           <img src= {assets.photo} alt="error" className='w-52 bg-gray-800 border-none'/>
             <p>Welcome to Food Paradise, your ultimate destination for delectable and wholesome home-cooked meals in sector-62 , Noida .Our tiffin service caters to a diverse clientele , including , and those residing in PG accommodations.</p>

              <div className=' flex gap-3 mt-3 cursor-pointer'>
              <FaFacebook className='w-9 h-9 '/>
              <FaInstagramSquare  className='w-9 h-9'/>
              <FaMapLocationDot className='w-9 h-9' onClick={()=>{
                window.open('https://www.google.com/viewer/place?sca_esv=b22bf8643ac1f672&output=search&mid=/g/11tf41gb92&pip=ChRmb29kIHBhcmFkaXNlIHNlYyA2MhAC&lqi=ChRmb29kIHBhcmFkaXNlIHNlYyA2Mkii0tzAtLmAgAhaJhAAEAEQAhADGAAYARgCGAMiFGZvb2QgcGFyYWRpc2Ugc2VjIDYykgESYm94X2x1bmNoX3N1cHBsaWVyqgFPEAEqESINZm9vZCBwYXJhZGlzZSgAMh4QASIax-MRo2gP7mFQfUgeLCyFLQLa7-cFY6aYV8IyGBACIhRmb29kIHBhcmFkaXNlIHNlYyA2Mg&phdesc=LTLoZcNs51E&sa=X&ved=2ahUKEwiUv-TR_Z2LAxXVa_UHHTCECmMQkbkFKAB6BAgOEAg', '_blank')
              }}/>
              </div>
             </div>
           <div className='centerfooter'>
            <h2 className='font-extrabold text-xl'>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
           </div>
           <div className='rightfooter'>
                <h2 className='font-extrabold text-xl'>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9899630323</li>
                    <li>56 , NCR , Block B , Industrial Area , Sector 62 , Noida , Ghaziabad <br /> Uttar Pradesh 201309  </li>
                    <li>foodparadisenoida@gmail.com</li>
                </ul>
           </div>
        </div>
        <hr id='oo'/>
        <div className='bottomfooter'>
            <p> Copyright 2024 © FoodParadise.com - All Rights Reserved.</p>
            </div>
     </div>
    </>
  )
}

export default Footer