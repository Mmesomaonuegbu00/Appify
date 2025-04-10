import Image from 'next/image';
import React from 'react'
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

interface ReveiwCarouselProps {
    image: string;
    altText: string;
    name: string;
    jobtitle: string;
    carouselDescription: string;

}



const ReveiwCarousel: React.FC<ReveiwCarouselProps> = ({ image, altText, name, carouselDescription, jobtitle }) => {
    return (
        <div className='w-full lg:w-[90%] relative mx-auto p-6 bg-white shadow-lg rounded-lg'>
            <div>
                <FaQuoteLeft className='w-14 h-14 opacity-10 absolute top-8 pb-2' />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-6 items-center'>
                <div className='col-span-3 order-2 lg:order-1'>
                    <p className='mt-12 test-sm sm:text-base  font-medium leading-[1.5rem] sm:leading-[1.8rem] md:leading-[2.5rem] text-gray-700'>{carouselDescription}</p>

                    <div className='flex items-center mt-6'>
                        <FaStar className='text-yellow-600 w-6 h-6' />
                        <FaStar className='text-yellow-600 w-6 h-6' />
                        <FaStar className='text-yellow-600 w-6 h-6' />
                        <FaStar className='text-yellow-600 w-6 h-6' />
                        <FaStar className='text-yellow-600 w-6 h-6' />

                    </div>
                    <h2 className='text-xl font-semibold mt-8'>{name}</h2>
                    <p className='mt-2 text-lg text-gray-500 font-medium'>{jobtitle}</p>
                </div>
                <div className='col-span-2 mx-auto order-1 lg:order-2  '>
                    <Image src={image} alt={altText} width={300} height={300} className='rounded-full' />
                </div>
            </div>



        </div>
    )
}

export default ReveiwCarousel
