import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";

const LogIn = ({login}) => {

    const [state, setstate] = useState('Login')
  return (
    
    <>
      <div className='login'>
        <form className='place-self-center w-96 flex flex-col gap-5 bg-white p-5 rounded-xl shadow-2xl' id='form'> 
             <div className='flex justify-between text-black  font-bold text-xl'>
                <h2>{state}</h2>
                <RxCross2 className='w-15 cursor-pointer' onClick={()=>login(false)}/>
             </div>
             <div className='flex flex-col gap-5 w-80'>
                {state === 'Login' ? '' : <input className='border-1 p-2 outline-none border-gray-700 rounded text-xs font-semibold' type="text" placeholder='Your name' required />}
                <input className='border-1 p-2 outline-none border-gray-700 rounded text-xs font-semibold' type="email" placeholder='Your email' required />
                <input className='border-1 p-2 outline-none border-gray-700 rounded text-xs font-semibold' type="password" placeholder=' password' required />
             </div>

             <button className='border-none font-bold bg-red-600 w-80 rounded p-2 text-white cursor-pointer'>{state === 'Sign Up' ? 'Create account' : 'Login'}</button>
             <div className='uu'>
                <input className='mt-1' type="checkbox" required />
                <p className='font-semibold'>By continuing , I agree to the terms of use <br />& Privacy  Policy </p>
             </div>
             <div  className='ll'>
             {state === 'Login' ? <p className='font-semibold'>Create a new account? <span  className='text-red-500 cursor-pointer' onClick={()=> setstate('Sign Up')}>Click here</span></p> :
              <p className='font-semibold'>Allready have an account? <span className='text-red-500 cursor-pointer' onClick={()=> setstate('Login')}>Login here</span></p>}

             </div>
         
        </form>
      </div>
    </>
  )
}

export default LogIn