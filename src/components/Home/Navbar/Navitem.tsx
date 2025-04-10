import React from 'react'
import Link from 'next/link';

interface NavProps {
    address: string;
    title: string;
}

const Navitem: React.FC<NavProps> = ({ address, title }) => {
  return (
    <div>
      <Link href={address}>
        <p className="font-bold relative text-base w-fit 
          after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-full after:bg-pink-600
          after:scale-x-0 after:origin-right after:transition-transform after:duration-300 
          hover:after:scale-x-100 border-b-[1.5px] border-white pb-1 ml-2  sm:ml-10 lg:ml-0">
          {title}
        </p>
      </Link>
    </div>
  );
}

export default Navitem;
