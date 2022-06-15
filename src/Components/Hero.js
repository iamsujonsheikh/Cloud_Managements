import React from 'react'
import { DatabaseIcon, CloudUploadIcon, PaperAirplaneIcon, ServerIcon } from '@heroicons/react/solid'
import Bg from '../assets/cyber-bg.png'

const Hero = () => {
  return (
    <section name='home' className='w-full h-full pt-32 px-4 md:h-[550px] bg-zinc-300'>

        <main className='md:grid grid-cols-2 justify-around gap-4'>
            {/* tittle section here */}
            <div className='md:w-6/12 w-10/12 mx-auto space-y-2 py-8 '>

            <h3 className='text-lg font-semibold'>Unique Sequencing & Production</h3>
            <h1 className='text-4xl font-bold'>Cloud Management</h1>
            <p className='text-lg font-semibold'>This Our Tech Brand</p>

            <button className='font-semibold w-56 bg-teal-600 shadow drop-shadow rounded-lg hover:text-gray-200 hover:bg-teal-800 ease-in-out duration-500 py-2'>Get Start</button>

            </div>

            {/* bgImage section here */}
            <div className='md:w-6/12 w-9/12 mx-auto pb-6'>
                <img className='' src={Bg} alt="" />
            </div>
        </main>

        {/* heroIcon section here */}
        <div className='md:w-3/4 mx-auto border-2 border-gray-400 rounded shadow-xl drop-shadow-lg'>
            <p className='text-lg text-center py-4 font-semibold'>Data Services</p>

                <div className='flex justify-evenly pb-4'>
                    <p className='flex justify-center text-xs	items-center md:text-base'><CloudUploadIcon className='w-6 text-gray-800'/>App Security</p>
            
                    <p className='flex justify-center text-xs items-center md:text-base'><DatabaseIcon className='w-6 text-gray-800'/>Dashboard Design</p>

                    <p className='flex justify-center text-xs items-center md:text-base'><PaperAirplaneIcon className='w-6 text-gray-800'/>Cloud Data</p>

                    <p className='flex text-xs justify-center items-center md:text-base'><ServerIcon className='w-6 text-gray-800'/>API</p>
                </div>
            </div>
    </section>
  )
}

export default Hero