import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='bg-white py-10'>
            <div className='w-[90%] mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    <div>
                        <h1 className='text-xl md:text-3xl font-extrabold'><span className='text-3xl md:text-4xl text-pink-800'>A</span> ppify</h1>

                        <p className='mt-4 text-sm font-medium leading-[2rem] w-[80%] text-gray-600'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolorum cumque! Minus tempora.

                        </p>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold text-gray-800'>
                            About us
                        </h3>
                        <ul className='mt-4 space-y-2 text-gray-800'>
                            <li>
                                <a href='#' className='text-sm hover:text-blue-900 transition-all duration-300'>
                                    Our Story
                                </a>
                            </li>
                            <li>
                                <a href='#' className='text-sm hover:text-blue-900 transition-all duration-300'>
                                    Team
                                </a>
                            </li>
                            <li>
                                <a href='#' className='text-sm hover:text-blue-900 transition-all duration-300'>
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href='#' className='text-sm hover:text-blue-900 transition-all duration-300'>
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold text-gray-800'>
                            Services
                        </h3>
                        <ul className='mt-4 space-y-2 text-gray-800'>
                            <li>
                                <a href='#' className='text-sm hover:text-blue-900 transition-all duration-300'>
                                    Chat Prompt Module
                                </a>
                            </li>
                            <li>
                                <a href='#' className='text-sm hover:text-blue-900 transition-all duration-300'>
                                    Real-time Analytics
                                </a>
                            </li>
                            <li>
                                <a href='#' className='text-sm hover:text-blue-900 transition-all duration-300'>
                                    Customizable Reports and Dashboards
                                </a>
                            </li>
                            <li>
                                <a href='#' className='text-sm hover:text-blue-900 transition-all duration-300'>
                                    Premium Features
                                </a>
                            </li>
                            <li>
                                <a href='#' className='text-sm hover:text-blue-900 transition-all duration-300'>
                                    Premium Features
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-lg font-semibold text-gray-800'>
                            Contact us
                        </h3>
                        <ul className='mt-4 space-y-2 text-gray-800'>
                            <li>
                                <a href='#' className='text-sm hover:text-blue-900 transition-all duration-300'>
                                    Email: 123@example.com
                                </a>
                            </li>
                            <li>
                                <a href='#' className='text-sm hover:text-blue-900 transition-all duration-300'>
                                    Phone: +1 123-456-7890
                                </a>
                            </li>
                            <li>
                                <a href='#' className='text-sm hover:text-blue-900 transition-all duration-300'>
                                    Address: 123 Main St, City, State, Zip Code
                                </a>
                            </li>
                            <li>
                                <a href='#' className='text-sm hover:text-blue-900 transition-all duration-300'>
                                    Socials: twitter
                                </a>
                            </li>

                        </ul>

                    </div>
                </div>

                <div className='mt-8 border-t pt-8 flex flex-col md:flex_row justify-between items-center text-gray-600 text-sm'>
                    <p className='text-center text-gray-600 text-sm md:text-left'>
                        Copyright © 2022 Appify. All rights reserved.
                    </p>

                    <div className="flex items-center space-x-4 mt-4 md:mt-0">
                        <span> Social:</span>

                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-all duration-300">
                            <FaFacebook />
                        </a>

                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-all duration-300">
                            <FaInstagram />
                        </a>

                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-all duration-300">
                            <FaTwitter />
                        </a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer
