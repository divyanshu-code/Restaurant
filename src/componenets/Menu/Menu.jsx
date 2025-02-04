import React from 'react'
import { menu_list } from '../../assets/assets'


const Menu = ({category , setmenu}) => {
  return (
    <>
        <div className='flex flex-col gap-5 ml-37 mr-25 mt-16 ' id='exploremenu'>
             
             <h1 className='text-4xl font-bold '>
                Explore our menu
             </h1>
             <p className='w-3xl font-semibold '>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            
            <div id='neo' className='flex items-center justify-between overflow-x-scroll gap-10 p-2'>
                {menu_list.map((item,index)=>{
                     
                     return (
                          <div onClick={()=> setmenu(prev=> prev=== item.menu_name? "All" : item.menu_name)} key={index} className='tutu'>
                              <img className={category === item.menu_name ?"Active" : ""} id='image' src={item.menu_image} alt="error" />
                             <p className='text-center text-gray-400 font-semibold cursor-pointer mt-3'>{item.menu_name}</p>

                          </div>
                     )
                })}
            </div>
            <hr className=' border h-0 m-2'/>

        </div>
    </>
  )
}

export default Menu