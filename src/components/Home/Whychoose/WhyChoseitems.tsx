import React from 'react'
import Image from 'next/image';

interface WhyChoseitemsProps {
   
    linkText: string; 
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  
}



const WhyChoseitems: React.FC<WhyChoseitemsProps> = ({ title, description,image,imageAlt,linkText}) => {
  return (
    <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
      <Image src={image} alt={imageAlt} width={100} height={100} className='object-contain mx-auto' />
      <h1 className='text-center text-lg mt-5 mb-5 font-semibold text-gray-800'>{title}</h1>
      <p className='text-gray-600 text-center font-medium text-sm mb-7'>{description}</p>
      <p  className='text-center font-semibold text-blue-900 hover:text-blue-950 transition-all duration-300'>{linkText} &#8594;</p>
    </div>
  )
}

export default WhyChoseitems
