import React from 'react'
import { FaCheck } from 'react-icons/fa'

interface PriceCardProps {
    title: string
    price: string
    features: string[]
}

const PriceCard: React.FC<PriceCardProps> = ({ title, price, features }) => {
    return (
        <div className='bg-white p-12 rounded-lg shadow-lg'>
            <h3 className='mt-8 text-xl text-blue-600 text-center'>{title}</h3>
            <div className='font-medium text-3xl mt-4 text-center'> $ <span className='text-5xl font-bold'>{price} </span>/mo </div>

            <p className='mt-2 text-gray-600 text-center'>per User</p>

            <div className='mt-10'>
                <div className='text-center mb-4'>
                    <ul className="space-y-2 text-center">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center  space-x-3 text-center">
                                <div className='w-6 h-6 bg-gray-200 rounded-full flex justify-center items-center'>
                                    <FaCheck className='text-green-500' />
                                </div>
                                <span className='text-center'>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='mt-8 justify-center flex'>
                <button className='mt-6 bg-blue-500 hover:bg-blue-700 text-white py-3 px-10 rounded-full font-semibold'>
                    Choose Plan
                </button>
            </div>

        </div>
    )
}

export default PriceCard