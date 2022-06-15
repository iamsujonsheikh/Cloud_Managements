import React from 'react'

const About = () => {
  return (
    <section name='about'>
        <main className='w-full h-full md:py-40 items-center pt-10 bg-gray-200 px-4'>
            {/* tittle section here */}
            <h1 className='text-4xl font-bold text-center py-4'>Trusted by developers across the world</h1>

            <p className='text-center text-lg text-gray-900 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Repellat soluta modi reprehenderit vitae dolorum molestias perferendis odit, <br /> voluptate corrupti suscipit esse.</p><br />

            {/* card section here */}
            <div className='w-10/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-2 text-center'>

                <div className='border border-gray-100 hover:scale-95 duration-500 bg-slate-50 shadow-lg drop-shadow-xl rounded-lg mt-2 p-2 space-y-2'>
                    <h1 className='text-4xl text-indigo-500 font-bold'>100%</h1>
                    <p className='text-gray-600'>Completion</p>
                </div>

                <div className='border border-gray-100 hover:scale-95 duration-500 bg-slate-50 shadow-lg drop-shadow-xl rounded-lg mt-2 p-2 space-y-2'>
                    <h1 className='text-4xl text-indigo-500 font-bold'>24/7</h1>
                    <p className='text-gray-600'>Delivery</p>
                </div>

                <div className='border border-gray-100 hover:scale-95 duration-500 bg-slate-50 rounded-lg mt-2 shadow-lg drop-shadow-xl p-2 space-y-2'>
                    <h1 className='text-4xl text-indigo-500 font-bold'>100K</h1>
                    <p className='text-gray-600'>Transaction</p>
                </div> <br />
            </div>
        </main>
    </section>
  )
}

export default About