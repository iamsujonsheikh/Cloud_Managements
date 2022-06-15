import React, { useState } from 'react'
import { MenuIcon,XIcon } from '@heroicons/react/outline'
import { Link, animateScroll as scroll, } from 'react-scroll'


const Navbar = () => {

  const [open, setOpen] = useState(false)

  // create a function  for toggle nav.
  const handleNav = () =>{
    setOpen(!open)
  }

  // create a function  for toggle nav.
  const handleCloseNav = () =>{
    setOpen(!open)
  }

  return (
    <section className='w-full z-10 fixed justify-center items-center bg-zinc-300 h-16 drop-shadow-md'>

      <main className='flex items-center justify-between h-16 px-4'>

        {/* logo section */}
        <div className=''>
          <h1 className='text-2xl font-bold'>Cloud M.</h1>
        </div>

      {/* navBar section desktop menu section */}
          <ul className='hidden font-semibold uppercase md:flex space-x-8 text-lg'>
            
            <li className='cursor-pointer'>
          <Link to="home" smooth={true} offset={-50} duration={500}>Home</Link>
            </li>

            <li className='cursor-pointer'>
          <Link to="about" smooth={true} offset={-50} duration={500}>About</Link>
            </li>

            <li className='cursor-pointer'>
          <Link to="support" smooth={true} offset={-40} duration={500}>Support</Link>
            </li>

            <li className='cursor-pointer'>
          <Link to="platforms" smooth={true} offset={-75} duration={500}>Platforms</Link>
            </li>

            <li className='cursor-pointer'>
          <Link to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link>
            </li>
          </ul>

        {/* icon section */}
          <div onClick={handleNav} className='cursor-pointer md:hidden'>
            {
              !open ? <MenuIcon className='w-8'/> : <XIcon className='w-8'/>
            }
          </div>

          {/* button section */}
          <div className='hidden md:flex space-x-6'>

            <button className='font-semibold uppercase bg-slate-400 hover:bg-slate-500 px-4 py-2 rounded-lg shadow drop-shadow hover:text-gray-200 ease-in-out duration-500'>Sign In</button>

            <button className='font-semibold uppercase bg-blue-600 hover:text-gray-200 ease-in-out duration-500 text-gray-900 py-2 px-4 rounded-lg shadow drop-shadow'>Sign Up</button>
          </div>
      </main>

      {/* navBar section mobile menu section */}
      <div>
      <ul className={open ? ' text-xl font-semibold uppercase px-8  w-full bg-zinc-300 duration-700 pb-6' : 'hidden'}>
          
        <li className='border-b p-2 text-center cursor-pointer hover:bg-zinc-400 ease-in-out duration-500'>
          <Link onClick={handleCloseNav} to="home" smooth={true} offset={50} duration={500}>Home</Link>
            </li>

            <li className='border-b p-2 text-center cursor-pointer hover:bg-zinc-400 ease-in-out duration-500'>
          <Link onClick={handleCloseNav} to="about" smooth={true} offset={-30} duration={500}>About</Link>
            </li>

            <li className='border-b p-2 text-center cursor-pointer hover:bg-zinc-400 ease-in-out duration-500'>
          <Link onClick={handleCloseNav} to="support" smooth={true} offset={-50} duration={500}>Support</Link>
            </li>

            <li className='border-b p-2 text-center cursor-pointer hover:bg-zinc-400 ease-in-out duration-500'>
          <Link onClick={handleCloseNav} to="platforms" smooth={true} offset={-70} duration={500}>Platforms</Link>
            </li>

            <li className='p-2 text-center cursor-pointer hover:bg-zinc-400 ease-in-out duration-500'>
          <Link onClick={handleCloseNav} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link>
            </li>

         
        <button className='font-semibold uppercase text-gray-200 bg-slate-500 hover:bg-slate-600 w-full shadow-xl drop-shadow-lg px-4 mt-2 py-2 rounded-lg mb-4 ease-in-out duration-500'>Sign In</button><br />

        <button className='font-semibold uppercase text-gray-200 w-full bg-blue-600 py-2 px-4 rounded-lg shadow-lg drop-shadow-lg hover:bg-blue-700 ease-in-out duration-500'>Sign Up</button>
        </ul>
      </div>
    </section>
  )
}

export default Navbar