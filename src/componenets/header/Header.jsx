import React, { useContext, useState } from 'react'
import { IoIosSearch , IoMdMenu, IoMdClose} from "react-icons/io";
import { FaBasketShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { StoreContent } from '../../context/StoreContent';
import { assets } from '../../assets/assets';

const Header = ({login , cart}) => {

  const [yes, setyes] = useState('Menu')
  const [menuOpen, setMenuOpen] = useState(false);
   const {total}= useContext(StoreContent);

  return (
   <>
  
      <div  className='flex  w-full justify-between px-5 py-3 md:px-10 lg:px-32  bg-white shadow-md mr-14'>
     <Link to='/'> <img src={assets.logo} alt="error" className='w-40 md:w-52'  /> </Link> 

     <button className='md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
        </button>
        
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto md:flex items-center gap-12 bg-white md:bg-transparent p-5 md:p-0 transition-transform ${menuOpen ? 'block' : 'hidden md:flex'}`}
        >
          <Link to='/' onClick={()=> setyes("Home")} className={yes==='Home'? "active" : ""}>Home</Link>
          <a href='#exploremenu' onClick={()=> setyes("Menu")} className={yes==='Menu'? "active" : ""}>Menu</a>
          <a href='#app' onClick={()=> setyes("Mobile app")} className={yes==='Mobile app'? "active" : ""}>Mobile app</a>
          <a href='#footer' onClick={()=> setyes("contact us")} className={yes==='contact us'? "active" : ""}>contact us</a>
        </ul>

   <div className='hidden md:flex gap-10 items-center '>
       
   <IoIosSearch  size={30}/>

   <div className='position-relative'> 
   <Link to='/cart' >  <FaBasketShopping size={30}  /> </Link>
    <div className={total()>0 ? 'dot' : ""}></div>
    </div>
  
     <button onClick={()=>login(true)} className='border-2 px-5 py-2 rounded-xl border-red-200 bg-transparent transition hover:bg-red-200 hover:text-white ' id='button'>sign in</button>
     </div>
     
      </div>
     

   </>
  )
}

export default Header