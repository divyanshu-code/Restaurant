import React, { useContext } from 'react'
import { StoreContent } from '../../context/StoreContent'
import FoodItem from '../fooditem/FoodItem'

const FoodDisplay = ({category}) => {

   const {food_list}=  useContext(StoreContent)

  return (
    <>
    
    <div className='ml-37 mr-25 mt-5'>

        <h1 className=' font-bold text-3xl '>Top dishes near you</h1>
        <div className='mt-10 grid grid-cols-3 gap-13 gap-x-10'>
          {food_list.map((item,index)=>{
            
            if(category === "All" || category === item.category){
             
               return <FoodItem key={index} id={item._id}   name={item.name} price={item.price} description={item.description}  image={item.image}  />
                    
            }
          })}
        </div>
    </div>
    </>
  )
}

export default FoodDisplay