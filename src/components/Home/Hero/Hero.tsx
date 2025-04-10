import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#f7f6fb]'>
            <div className='flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
                    <div>
                        <div className='w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md flex items-center space-x-3 bg-white '>
                            <div className='px-3 py-1 md:px-5 md:py-1 rounded-full bg-blue-700 md:text-base sm:text-sm text-xs text-white'>
                                News
                            </div>
                            <p className='text-xs sm:text-sm'>we have updated our terms and condition</p>
                        </div>
                        <h1 data-aos="fade-up" data-aos-delay="100" className='text-2xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold md:leading-[3rem] lg:leading-[3.5rem]'> The premier workspace companion for you daily needs.</h1>
                        <p className='text-gray-700'>
                            Apify is a cloud-based workspace solution that makes it easy to collaborate, work together, and stay organized. With Apify, you can effortlessly manage your projects, share files, and collaborate with your team.
                        </p>
                       <div className='flex gap-4 mt-5 mb-8'>
                       <Image src="/as.png" alt='store images' width={150} height={100}></Image>
                       <Image src="/gp.png" alt='store images' width={150} height={100}></Image>
                       </div>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="100" className='hidden lg:block'>
                        <Image src="/hero.png" alt='hero image' width={700} height={700}></Image>
                    </div>

                </div>



            </div>


        </div>
    )
}

export default Hero
