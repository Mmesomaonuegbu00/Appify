import React from 'react'
import PriceCard from './PriceCard'

const Price = () => {
  return (
    <div className='pt-16 pb-16 bg-[#edfbff]'>
        <h2 className='MT-6 text-2xl md:text-3xl capitalize font-bold text-center'>
            Choose your plan
        </h2>

        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100" className='mt-20 grid w-[90%]  md:w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
            <PriceCard title='Basic' price='10' features={['100 GB storage', '10 GB bandwidth', '10 email accounts', '10 calendar events']} />
            <PriceCard title='Pro' price='29.99' features={['500 GB storage', '20 GB bandwidth', '20 email accounts', '20 calendar events']} />
            <PriceCard title='Enterprise' price='49.99' features={['1000 GB storage', '50 GB bandwidth', '50 email accounts', '50 calendar events']} />
        </div>
      
    </div>
  )
}

export default Price
