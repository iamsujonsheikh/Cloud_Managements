import React from 'react'
import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline'
import { ChipIcon, SupportIcon} from '@heroicons/react/solid'
import bg from '../assets/support.jpg'


const Support = () => {
  return (
    <section name='support' className='w-full bg-slate-200'>
       <div>
             {/* tittle section here */}
        <div className='w-full h-[550px] absolute bg-gray-800/90'>
            <img className='w-full  mix-blend-overlay h-[550px] object-cover' src={bg} alt="" />
        </div>

            {/* tittle section here */}
        <div className='w-9/12 h-auto mx-auto relative'>
            <h2 className='text-center text-slate-200 text-lg pt-8 pb-4'>SUPPORT</h2>

            <h1 className='text-center text-white text-2xl font-bold'>Finding the right team</h1>

            <p className='text-center text-slate-200 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sapiente molestiae rerum libero recusandae ad provident animi veritatis fugit ab. Id inventore, ratione mollitia qui facilis obcaecati animi laborum aspernatur.</p>
        </div>
       </div>



       
        {/* another section */}
        
        <div className='md:grid md:grid-cols-2 lg:grid-cols-3'>
            <div className='w-10/12 mx-auto hover:scale-105 ease-in-out duration-500 rounded-lg shadow-lg p-4 bg-gray-50 relative my-10'>

                <PhoneIcon className='w-12 bg-blue-500 rounded text-white p-2 mt-[-36px]'/>

                <h1 className='py-2 text-xl font-bold'>Sales</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi qui porro expedita facere magni! Commodi ipsa aut optio dicta cum.</p>

                <div className='flex items-center pt-4 text-blue-400 cursor-pointer'>
                    <p>Contact Us</p><ArrowSmRightIcon className='w-6' />
                </div>
            </div>
            {/* -------------- */}
            <div className='w-10/12 mx-auto hover:scale-105 ease-in-out duration-500 rounded-lg shadow-lg p-4 bg-gray-50 relative my-10'>

                <SupportIcon className='w-12 bg-blue-500 rounded text-white p-2 mt-[-36px]'/>

                <h1 className='py-2 text-xl font-bold'>Technical Support</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi qui porro expedita facere magni! Commodi ipsa aut optio dicta cum.</p>

                <div className='flex items-center pt-4 text-blue-400 cursor-pointer'>
                    <p>Contact Us</p><ArrowSmRightIcon className='w-6' />
                </div>
            </div>
            {/* --------- */}
            <div className='w-10/12 mx-auto hover:scale-105 ease-in-out duration-500 rounded-lg shadow-lg p-4 bg-gray-50 relative my-10'>

                <ChipIcon className='w-12 bg-blue-500 rounded text-white p-2 mt-[-36px]'/>

                <h1 className='py-2 text-xl font-bold'>Media Inquiries</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi qui porro expedita facere magni! Commodi ipsa aut optio dicta cum.</p>

                <div className='flex items-center pt-4 text-blue-400 cursor-pointer'>
                    <p>Contact Us</p><ArrowSmRightIcon className='w-6' />
                </div>
            </div><br />
        </div>
    </section>
  )
}

export default Support