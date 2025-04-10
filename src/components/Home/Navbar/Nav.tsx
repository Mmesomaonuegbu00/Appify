'use client'
import React, { useEffect, useState } from 'react'
import Navitem from './Navitem'
import { HiBars3BottomRight } from 'react-icons/hi2'



interface NavProps {
  openNav: () => void;
}

const Nav: React.FC<NavProps> = ({ openNav }) => {
  const [navBg, setNavBg] = useState(false)

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      else setNavBg(false);

    };
    window.addEventListener('scroll', handler);

    return () => {
      window.removeEventListener('scroll', handler);
    };


  }, []);




  return (
    <div className={`fixed ${navBg ? 'bg-white shadow-md' : 'fixed'} w-full transition-all duration-200  h-[10vh] z-[1000]`}>
      <div className='flex items-center h-full justify-between  w-[90%] xl:w-[80%] mx-auto'>
        <h1 className='text-xl md:text-3xl font-extrabold'><span className='text-3xl md:text-4xl text-pink-800'>A</span> ppify</h1>

        <ul className='lg:flex hidden items-center space-x-10'>
          <Navitem address='/' title='Home' />
          <Navitem address='/about' title='About' />
          <Navitem address='/feature' title='Feature' />
          <Navitem address='/testimonial' title='Testimonail' />
          <Navitem address='/blog' title='Blog' />
          <Navitem address='/contact' title='Contact' />


        </ul>

        <button className='lg:flex hidden text-white font-medium bg-blue-700 py-2 md:py-2 md:px-8 px-4 rounded-4xl hover:bg-blue-900 transition-all duration-200 '>
          Join Now
        </button>

        <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-black lg:hidden font-extrabold' />
      </div>

    </div>
  )
}

export default Nav
