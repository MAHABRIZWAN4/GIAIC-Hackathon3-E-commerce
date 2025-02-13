import React from 'react';
import Link from 'next/link';
import { FaStar } from "react-icons/fa";
import SellingCard from './pageCard';


const Selling = () => {
  const posts = [
    {
      id: '1',
      title: 'VERTICAL STRIPED SHIRT',
      price: '$212 ',
      resp: '* * * * (88)',
      imageUrl: '/images/s1.png',
    },
    {
      id: '2',
      title: 'COURAGE GRAPHIC T-SHIRT',
      price: '$145',
      resp: '* * * * (75)',
      imageUrl: '/images/s4.png',
    },
    {
      id: '3',
      title: 'LOOSE FIT BERMUDA SHORTS',
      price: '$80',
      resp: '* * * * (99)',
      imageUrl: '/images/s3.png',
    },
    {
      id: '4',
      title: 'FADED SKINNY JEANS',
      price: '$210',
      resp: '* * * * (99)',
      imageUrl: '/images/s2.png',
    },
    // {
    //   id: '5',
    //   title: 'Next.Js 15',
    //   price: 'Leveraging Middleware in Next.js 15 for Smarter Applications',
    //   resp: '',
    //   imageUrl: '/images/next.jpg',
    // },
    // {
    //   id: '6',
    //   title: 'Next.Js 15',
    //   price: '10 Proven Tips to Optimize Your Next.js 15 Applications for Performance',
    //   resp: '',
    //   imageUrl: '/images/next.jpg',
    // },
    // Add more unique entries as needed
  ];

  return (
    <div className='bg-white'>

    <div className="bg-white  mt-16 max-w-[1200px]  mx-auto">
        <h1 className=' text-[35px] text-center font-extrabold'>NEW ARRIVALS</h1>
        

      {/* <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
        Exploring the World of AI and Technology
        </h1> */}
      <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {posts.map((post) => (
            <div className="fade-in" key={post.id}>
            <SellingCard post={post}  />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ml-8'>
               <div className='flex items-center  '>
               <FaStar   className=' text-yellow-400'/>
               <FaStar   className=' text-yellow-400'/>
               <FaStar   className=' text-yellow-400'/>
               <FaStar   className=' text-yellow-400'/>

               </div>
            </div>
          </div>
        ))}
      </div>
        {/* <Link href="/Category"> */}
      <div className='flex items-center justify-center mt-16'>

            <button className='h-[52px] w-[218px] border border-black rounded-[50px] hover:bg-black hover:text-white'><Link href="/category">View All Products</Link></button>
        </div>
        {/* // </Link> */}


        {/* <div className='border-b-[1.5px] mt-12'> </div> */}
    </div>
        </div>
  );
};

export default Selling;