import React from 'react'
import WhyChoseitems from './WhyChoseitems'

const WhyChose = () => {
    return (
        <div className='pt-16 pb-16 '>
            <h1 className='mt-6 text-2xl md:text-3xl capitalize font-bold text-center'>
                Why Choose Appify?
            </h1>
            <div className='mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12'>

                <WhyChoseitems
                    image='/i1.png'
                    title='Create Free Account'
                    description='Sign up for free and start earning rewards with appify to get our free reward and benefits.'
                    imageAlt='Create Free Account Icon'
                    linkText='Check Pricing'
                />
                <WhyChoseitems
                    image='/i2.png'
                    title='Unlimited Rewards'         
                    description='Unlock unlimited rewards for your customers with appify to get our free reward and benefits.'
                    imageAlt='Unlimited Rewards Icon'
                    linkText='Check Rewards'
                />
                <WhyChoseitems
                    image='/i3.png'
                    title='Customizable Rewards'
                    description='Create and customize rewards for your customers with appify to get our free reward and benefits.'
                    imageAlt='Customizable Rewards Icon'
                    linkText='Check Pricing'
                />
                <WhyChoseitems
                    image='/i4.png'
                    title='Mobile & Web Support'
                    description='Get help with your app on both mobile and web with appify to get our free reward and benefits.'
                    imageAlt='Mobile & Web Support Icon'
                    linkText='Check Pricing'
                />


            </div>
        </div>
    )
}

export default WhyChose
