import React from 'react';

interface FeatureItemProps {
  title: string;
  IconType: React.ComponentType<{ className?: string }>;
  color: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, IconType, color }) => {
  return (
    <div data-aos="flip-right" data-aos-anchor-placement="top-center" className="bg-white py-7  flex items-center justify-center gap-4 rounded-lg shadow-sm">
      <span className=' bg-gray-100 p-4 rounded-full'><IconType className={`text-xl ${color}`} aria-hidden="true" /></span>
      <h3 className="font-bold text-base text-gray-800">{title}</h3>
    </div>
  );
};

export default FeatureItem;
