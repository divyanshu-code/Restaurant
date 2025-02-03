import React from 'react'
import { assets } from '../../assets/assets'


const AppDownload = () => {
  return (
    
    <>
    <div className='align-center mt-30  font-semibold text-4xl text-center' id='app'>
        <p >For Better Experience Download </p> 
        <p className='mt-3'>FoodParadise App</p>

        <div className='play'>
          <img src={assets.play_store} alt="error" />
          <img src={assets.app_store} alt="error" />
        </div>
    </div>
    </>
  )
}

export default AppDownload