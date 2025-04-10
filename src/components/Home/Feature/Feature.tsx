import React from 'react';
import Featureitem from './Featureitem';
import { FaBook, FaCog, FaInfinity, FaLayerGroup, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';
import { FaDesktop, FaHeadset, FaLaptop } from 'react-icons/fa6';

const Feature = () => {
  return (
    <div className="bg-pink-100">
      <div className="w-[80%] pt-24 pb-16 mx-auto">
        <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center text-gray-900">
          It&#39;s everything you&apos;ll Ever Need
        </h1>
        <div className="mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <Featureitem IconType={FaLayerGroup} title="50+ Unique Design Blocks" color="text-red-500" />
          <Featureitem IconType={FaLaptop} title="Multiple Layouts" color="text-blue-500" />
          <Featureitem IconType={FaMobileAlt} title="Mobile First Design" color="text-green-500" />
          <Featureitem IconType={FaDesktop} title="Fully Responsive" color="text-purple-500" />
          <Featureitem IconType={FaCog} title="Customizable Features" color="text-yellow-500" />
          <Featureitem IconType={FaHeadset} title="Humanly Support" color="text-orange-500" />
          <Featureitem IconType={FaInfinity} title="Lifetime Updates" color="text-indigo-500" />
          <Featureitem IconType={FaBook} title="Powerful Documentation" color="text-pink-500" />
          <Featureitem IconType={FaShieldAlt} title="Enhanced Security" color="text-teal-500" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
