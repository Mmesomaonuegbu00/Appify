import Image from 'next/image'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const Analytics = () => {
  return (
    <div className='pt-24 pb-16 '>
      <div className='w-[95%] sm:w-[80%] items-center grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto'>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <Image src="/a.jpg" alt='images' width={500} height={500} className='object-contain' />
        </div>

        <div className='p-6'>
          <h1 className='tesxt-base font-semibold text-orange-500'> Audience tracking aand insights</h1>
          <h1 className=' mt-4 text-2xl lg:text-4xl xl:text-4xl font-bold capitalize text-gray-900'>
            powerful analytics tools that put you in conrol and are fully customizable
          </h1>

          <p className='mt-4 text-gray-600 text-sm font-medium leading-[2rem]'>
            Apifys powerful analytics tools help you understand your audience, optimize your content, and improve your website. Our platform offers a wide range of features, including audience segmentation, behavioral analytics, and real-time insights.
          </p>

          <p className='mt-6 text-gray-700'>
            Get started with Apifys powerful analytics tools today.
          </p>
          <ul className='mt-7 space-y-2 text-gray-800'>
            <li className='flex items-center font-semibold'>
              <FaCheckCircle className='text-green-500 mr-2'/>
              Chat prompt module supportted
            </li>
            <li className='flex items-center font-semibold'>
              <FaCheckCircle className='text-green-500 mr-2'/>
              Real-time analytics
            </li>
            <li className='flex items-center font-semibold'>
              <FaCheckCircle className='text-green-500 mr-2'/>
              Customizable reports and dashboards
            </li>
            <li className='flex items-center font-semibold'>
              <FaCheckCircle className='text-green-500 mr-2'/>
              Integrations with popular platforms
            </li>


          </ul>
          <button className='mt-6 bg-gray-200 rounded-full text-gray-900 py-3 px-5 font-semibold hover:bg-blue-700 hover:text-white transition-all duration-300'>
            Explore More &#8594;

          </button>
        </div>
      </div>

    </div>
  )
}

export default Analytics
