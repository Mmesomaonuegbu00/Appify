
import React from 'react'
import Navitem from './Navitem'
import { CgClose } from 'react-icons/cg'


interface MobileNavProps {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ showNav, closeNav }) => {
  return (
    <div>
      {showNav && (
        <>
        
          <div className='fixed inset-0 transform transition-all duration-500 z-[10000] bg-black opacity-70 w-full h-screen' onClick={closeNav}></div>

          
          <div className={`text-white fixed  justify-center flex flex-col h-full  transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-indigo-900 space-y-6 z-[10000]  ${showNav ? 'translate-x-0' : 'translate-x-full'}`} >
            <ul>
              <Navitem address='/' title='Home' />
              <Navitem address='/about' title='About' />
              <Navitem address='/feature' title='Feature' />
              <Navitem address='/testimonial' title='Testimonial' />
              <Navitem address='/blog' title='Blog' />
              <Navitem address='/contact' title='Contact' />
            </ul>
            <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm-w-8 w-6 h-6 cursor-pointer' />
          </div>
        </>
      )}
  </div>
);


}

export default MobileNav
