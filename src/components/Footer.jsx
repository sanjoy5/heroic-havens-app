import React from 'react';
import { FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="text-gray-600 body-font bg-base-200 mt-16">
            <div className="max-w-7xl px-5 pt-24 mx-auto">
                <div className="flex flex-wrap md:text-left text-center order-first">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font text-gray-900 tracking-widest text-2xl md:text-3xl font-bold mb-3">Heroic Havens</h2>

                        <p className="mb-3 text-gray-600">Address: 123 ABC Street, Dhaka 1234, Bangladesh</p>
                        <p className="mb-4 text-gray-600">Hotline: +8801XXXXXXXXX</p>

                        {/* <h2 className="title-font font-medium text-gray-900 tracking-widest  mb-3 uppercase">Follow Us On</h2> */}
                        <span className=" flex space-x-3 itmes-center justify-center md:justify-start  mb-10">
                            <FaFacebookF className='cursor-pointer text-lg hover:text-blue-500' />
                            <FaInstagram className='cursor-pointer text-lg hover:text-blue-500' />
                            <FaTwitter className='cursor-pointer text-lg hover:text-blue-500' />
                            <FaLinkedinIn className='cursor-pointer text-lg hover:text-blue-500' />
                        </span>

                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4 lg:grid lg:justify-items-center">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest uppercase mb-3">Categories</h2>
                        <nav className="list-none mb-10 space-y-2">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Avengers</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">DC</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Star Wars</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Transformers</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4 lg:grid lg:justify-items-center">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest uppercase mb-3">Quick Links</h2>
                        <nav className="list-none mb-10 space-y-2">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Our Policy</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Quick Delivery</a>
                            </li>

                            <li>
                                <a className="text-gray-600 hover:text-gray-800">About Us</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest  mb-3">SUBSCRIBE</h2>
                        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                            <div className="relative max-w-40 sm:w-auto xl:mr-2 lg:mr-0 sm:mr-2 mr-2">

                                <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Email' />
                            </div>
                            <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-blue-500 border-0 py-3 px-4 focus:outline-none hover:bg-blue-600 rounded"><FaArrowRight className='text-lg' /></button>
                        </div>
                        <p className="text-gray-500 text-sm mt-5 md:text-left text-center">
                            Subscribe to our newsletter for get our latest news, offers, and updates!
                        </p>
                    </div>
                </div>
            </div>

            <p className="text-center py-10">Sanjoy Sarker &copy; 2023 - All Rights Reserved</p>

        </footer>
    );
};

export default Footer;