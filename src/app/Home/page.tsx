import Image from 'next/image'
import React from 'react'
import Arrival from '../Arrival/page'
import Selling from '../Selling/page'
import DressStyle from '../Style/page'
import Customer from '../Customers/page'

function HomePage() {
  return (
    <div>

    <div className='bg-[#F2F0F1]'>

    <div className='max-w-7xl mx-auto '>



        {/* Section 1 */}
       <div className='flex flex-col md:flex md:flex-row items-center justify-between mx-4'>
        <div>
            <h1 className='font-extrabold text-[35px] md:text-[64px] w-[20rem] md:leading-[64px] md:w-[35rem] '>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className='text-stone-500 w-[20rem] md:w-[35rem] mt-8' >Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button className='w-[20rem] h-[3rem] md:w-[11rem] md:h-[3rem] mt-8 bg-black rounded-[50px] text-white flex items-center justify-center'>Shop Now</button>
            <div className='md:hidden flex items-center text-center justify-center gap-3 py-5'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-[24px] font-bold'>200+</h1>
                    <p>International Brands</p>
                </div>
                <div className='border-l-2 h-16'></div>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-[24px] font-bold'>2,000+</h1>
                    <p>High-Quality Products</p>
                </div>
            </div>
                <div className='md:hidden flex flex-col items-center justify-center py-6'>
                    <h1 className='text-[24px] font-bold'>3,000+</h1>
                    <p>Happy Customers</p>
                </div>

        </div>
        <div>
            <Image src="/images/b-g.png" alt='image' width={200} height={200} className='w-[500px]'/>            
       </div>
       </div>
       <div className='w-full grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1   items-center justify-around  bg-black h-[6rem]'>
        <Image src="/images/word1.png" alt='user' width={200} height={200} className='w-[100] h-[23px] md:w-[166.48px] md:h-[33.16px] ml-9 sm:ml-16'/>
        <Image src="/images/word2.png" alt='user' width={200} height={200} className='w-[100] h-[23px] md:w-[166.48px] md:h-[33.16px] ml-9 sm:ml-16'/>
        <Image src="/images/word3.png" alt='user' width={200} height={200} className='w-[100] h-[23px] md:w-[166.48px] md:h-[33.16px] ml-9 sm:ml-16'/>
        <Image src="/images/word4.png" alt='user' width={200} height={200} className='w-[100] h-[23px] md:w-[166.48px] md:h-[33.16px] ml-9 sm:ml-16'/>
       </div>




    </div>
    </div>
    <Arrival/>
    <Selling/>
    <DressStyle/>
    <Customer/>
    </div>
  )
}

export default HomePage