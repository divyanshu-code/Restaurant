import React, { useContext, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaBasketShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { StoreContent } from '../../context/StoreContent';
import { assets } from '../../assets/assets';

const Header = ({login , cart}) => {

  const [yes, setyes] = useState('Menu')

   const {total}= useContext(StoreContent);

  return (
   <>
  
      <div  className='flex items-center justify-between   mr-32 '>
     <Link to='/'> <img src={assets.logo} alt="error" className='w-52 ml-32'  /> </Link> 
        
        <ul  className=' flex  gap-10 font-medium cursor-pointer'>
          <Link to='/' onClick={()=> setyes("Home")} className={yes==='Home'? "active" : ""}>Home</Link>
          <a href='#exploremenu' onClick={()=> setyes("Menu")} className={yes==='Menu'? "active" : ""}>Menu</a>
          <a href='#app' onClick={()=> setyes("Mobile app")} className={yes==='Mobile app'? "active" : ""}>Mobile app</a>
          <a href='#footer' onClick={()=> setyes("contact us")} className={yes==='contact us'? "active" : ""}>contact us</a>
        </ul>

   <div className='flex gap-10 items-center '>
       
   <IoIosSearch  size={30}/>

   <div className='position-relative'> 
   <Link to='/cart' >  <FaBasketShopping size={30}  /> </Link>
    <div className={total()>0 ? 'dot' : ""}></div>
    </div>
  
     <button onClick={()=>login(true)} className='border-2 px-5 py-2 rounded-4xl cursor-pointer border-red-200 bg-transparent transition-colors ' id='button'>sign in</button>
     </div>
     
      </div>
     

   </>
  )
}

export default Header