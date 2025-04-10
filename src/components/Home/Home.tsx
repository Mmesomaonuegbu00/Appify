'use client'
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import WhyChose from './Whychoose/WhyChose'
import Analytics from './Analytics/Analytics'
import Feature from './Feature/Feature'
import Reveiw from './Reveiw/Reveiw'
import Price from './Price/Price'
import Footer from './Footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
  useEffect(() => {
  const initAos =  async() => {
    await import ('aos')
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      anchorPlacement:"top-bottom",
      disableMutationObserver: false,
      offset: 100,
    });
  };
  initAos();
  },[]);
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <WhyChose/>
      <Analytics/>
      <Feature/>
      <Reveiw/>
      <Price/>
      <Footer/>
      
    </div>
  )
}

export default Home
