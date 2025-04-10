'use client'
import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"
import ReveiwCarousel from './ReveiwCarousel';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Reveiw = () => {
  return (
    <div className='pt-16 pb-16 bg-[#fcf6fa]'>
      <h1 className='mt-6 text-2xl md:text-3xl capitalize font-bold text-center'>What client say about us</h1>

      <div className='mt-20 w-[90%] md:w-[80%] mx-auto'>
        <Carousel arrows={false} autoPlay={true} autoPlaySpeed={5000} infinite responsive={responsive} showDots>
          <ReveiwCarousel
            image="/c1.png"
            altText="Sample Alt Text"
            name="Jessy Doe"
            jobtitle="Software Engineer"
            carouselDescription=" With **powerful analytics tools that put you in control 
            and are fully customizable**, you can effortlessly track performance metrics, 
            gain deep insights into user behavior, optimize decision-making processes, 
            streamline operations with precision, enhance data visualization, integrate 
            seamlessly with various platforms, tailor reports to meet specific business needs,
             automate workflows for efficiency, leverage predictive analytics to anticipate trends, 
             and ultimately drive unparalleled growth and success in an ever-evolving digital landscape."
             />
             <ReveiwCarousel
            image="/c2.png"
            altText="Sample Alt Text"
            name="Jessy Doe"
            jobtitle="Product Manager"
            carouselDescription=" With **powerful analytics tools that put you in control 
            and are fully customizable**, you can effortlessly track performance metrics, 
            gain deep insights into user behavior, optimize decision-making processes, 
            streamline operations with precision, enhance data visualization, integrate 
            seamlessly with various platforms, tailor reports to meet specific business needs,
             automate workflows for efficiency, leverage predictive analytics to anticipate trends, 
             and ultimately drive unparalleled growth and success in an ever-evolving digital landscape."
          />
            
          <ReveiwCarousel
            image="/c1.png"
            altText="Sample Alt Text"
            name="Jessy Doe"
            jobtitle="Software Engineer"
            carouselDescription=" With **powerful analytics tools that put you in control 
            and are fully customizable**, you can effortlessly track performance metrics, 
            gain deep insights into user behavior, optimize decision-making processes, 
            streamline operations with precision, enhance data visualization, integrate 
            seamlessly with various platforms, tailor reports to meet specific business needs,
             automate workflows for efficiency, leverage predictive analytics to anticipate trends, 
             and ultimately drive unparalleled growth and success in an ever-evolving digital landscape."
          />
          <ReveiwCarousel
            image="/c2.png"
            altText="Sample Alt Text"
            name="Jessy Doe"
            jobtitle="Product Manager"
            carouselDescription=" With **powerful analytics tools that put you in control 
            and are fully customizable**, you can effortlessly track performance metrics, 
            gain deep insights into user behavior, optimize decision-making processes, 
            streamline operations with precision, enhance data visualization, integrate 
            seamlessly with various platforms, tailor reports to meet specific business needs,
             automate workflows for efficiency, leverage predictive analytics to anticipate trends, 
             and ultimately drive unparalleled growth and success in an ever-evolving digital landscape."
          />
        </Carousel>
      </div>
    </div>
  )
}

export default Reveiw
