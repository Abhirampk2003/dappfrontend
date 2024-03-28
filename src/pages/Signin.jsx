
import React from 'react';
import trees from '../assets/logo.png';


export default function Login3() {
  return (
    <div className='flex items-center justify-center h-screen -mt-16 md:-mt-24 lg:-mt-32'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[600px] h-[400px] shadow-lg shadow-gray-600'>
        <div className='hidden md:block'>
          <img className='w-full mt-40 mb-20 object-cover animate-spin-horizontal ' src={trees} alt="/" />
        </div>
        <div className='p-4 flex flex-col justify-center items-center md:items-start'>
          <form className='w-full'>
            <h2 className='text-4xl font-bold text-center mb-8'>VOTE.</h2>
            <div className='w-full'>
              <input className='border p-2 mb-4 w-full' type="text" placeholder='NAME' />
              <input className='border p-2 mb-4 w-full' type="password" placeholder='AADHAR NUMBER' />
            </div>
            <button className='w-full py-2 bg-orange-700 hover:bg-orange-800'>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  )
}










