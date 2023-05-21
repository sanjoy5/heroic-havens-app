import React from 'react';
import { Link } from 'react-router-dom';
import { BiLike } from 'react-icons/bi';
import { FaRegComment, FaRegShareSquare } from 'react-icons/fa';
import useTitle from '../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div>
            <div className="headerBanner bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] w-full h-[200px] md:h-[300px]  py-10  flex items-center justify-center flex-col">
                <h2 className="text-2xl md:text-4xl text-white font-bold mb-3">Our Blogs</h2>
                <p className="text-xl text-white"><Link to='/' className='text-blue-500'>Home</Link>/Blogs</p>
            </div>

            <section className="text-gray-600 body-font">
                <div className="py-16 mx-auto">
                    <div className="flex gap-10 flex-col md:gap-16">


                        <div className="p-12 w-full flex flex-col items-start shadow border py-8 md:py-12 px-6 md:px-16 rounded">
                            <a className="inline-flex items-center mt-4">
                                <img alt="blog" src="https://i.ibb.co/34GxQTD/1677149097978-01.jpg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-top" />
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-gray-900">Sanjoy Sarker</span>
                                    <span className="text-gray-400 text-xs tracking-widest mt-0.5">WEB DEVELOPER</span>
                                </span>
                            </a>
                            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                            <p className="leading-relaxed mb-8">An access token is a security credential that allows a client such as a user or application to access protected resources on a server. It is usually short-lived and used for authorization purposes. On the other hand, a refresh token is a long-lived token used to obtain a new access token once the previous one expires. It helps prevent the need for users to re-enter their credentials frequently.
                                <br /><br />
                                Access tokens are typically stored on the client-side in memory or in a browser's storage such as sessionStorage or localStorage. Refresh tokens, however, should be stored securely, such as in an HTTP-only cookie or a secure storage mechanism. Storing them securely helps mitigate the risk of unauthorized access and token theft.</p>
                            <div className="flex items-center flex-wrap pt-4 border-t-2 border-gray-100  w-full justify-between">

                                <div className='flex items-center'>
                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none pr-3 py-1 border-r-2 border-gray-200">
                                        <BiLike className='text-2xl mr-2' />1.2K
                                    </span>
                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none pr-3 py-1 border-r-2 border-gray-200">
                                        <FaRegComment className='text-xl mr-2' />64
                                    </span>

                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none pr-3 py-1">
                                        <FaRegShareSquare className='text-xl mr-2' />500
                                    </span>
                                </div>

                            </div>
                        </div>


                        <div className="p-12 w-full flex flex-col items-start shadow border py-8 md:py-12 px-6 md:px-16 rounded">
                            <a className="inline-flex items-center mt-4">
                                <img alt="blog" src="https://i.ibb.co/34GxQTD/1677149097978-01.jpg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-top" />
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-gray-900">Sanjoy Sarker</span>
                                    <span className="text-gray-400 text-xs tracking-widest mt-0.5">WEB DEVELOPER</span>
                                </span>
                            </a>
                            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                            <div className="leading-relaxed mb-8">
                                <h2 className="text-lg mb-3 font-semibold"> SQL Databases:</h2>
                                <ul className='mb-4 post' style={{ "list-style-type": "disc" }}>
                                    <li>Structured, predefined schemas</li>
                                    <li>Strong data consistency</li>
                                    <li>Supports complex queries and transactions</li>
                                    <li>Well-suited for structured data</li>
                                    <li>Vertical scalability</li>
                                    <li>ACID compliance</li>
                                    <li>Widely used in traditional enterprise applications</li>
                                </ul>

                                <h2 className="text-lg mb-3 font-semibold"> NoSQL Databases:</h2>
                                <ul className='post' style={{ "list-style-type": "disc" }}>
                                    <li>Flexible, no predefined schemas</li>
                                    <li>Sacrifices some data consistency for scalability</li>
                                    <li>Optimized for simple queries and quick data retrieval</li>
                                    <li>Ideal for unstructured or rapidly changing data</li>
                                    <li>Horizontal scalability</li>
                                    <li>BASE principles</li>
                                    <li>Commonly used in modern web, big data, and real-time applications.</li>
                                </ul>
                            </div>
                            <div className="flex items-center flex-wrap pt-4 border-t-2 border-gray-100  w-full justify-between">

                                <div className='flex items-center'>
                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none pr-3 py-1 border-r-2 border-gray-200">
                                        <BiLike className='text-2xl mr-2' />1.2K
                                    </span>
                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none pr-3 py-1 border-r-2 border-gray-200">
                                        <FaRegComment className='text-xl mr-2' />64
                                    </span>

                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none pr-3 py-1">
                                        <FaRegShareSquare className='text-xl mr-2' />500
                                    </span>
                                </div>

                            </div>
                        </div>


                        <div className="p-12 w-full flex flex-col items-start shadow border py-8 md:py-12 px-6 md:px-16 rounded">
                            <a className="inline-flex items-center mt-4">
                                <img alt="blog" src="https://i.ibb.co/34GxQTD/1677149097978-01.jpg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-top" />
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-gray-900">Sanjoy Sarker</span>
                                    <span className="text-gray-400 text-xs tracking-widest mt-0.5">WEB DEVELOPER</span>
                                </span>
                            </a>
                            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">What is express js? What is Nest JS?</h2>
                            <p className="leading-relaxed mb-8">Express.js is a minimalistic and flexible web application framework for Node.js. It provides a robust set of features for building web applications and APIs, such as routing, middleware support, and template engines. Express.js is lightweight and highly customizable, allowing developers to create web applications quickly and efficiently.
                                <br /> <br />
                                Nest.js is a progressive Node.js framework for building efficient and scalable server-side applications. It is built on top of Express.js and provides a modular architecture, dependency injection, and powerful features like decorators and TypeScript support. Nest.js promotes a structured approach to building applications and enables seamless integration with other libraries and tools.</p>
                            <div className="flex items-center flex-wrap pt-4 border-t-2 border-gray-100  w-full justify-between">

                                <div className='flex items-center'>
                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none pr-3 py-1 border-r-2 border-gray-200">
                                        <BiLike className='text-2xl mr-2' />1.2K
                                    </span>
                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none pr-3 py-1 border-r-2 border-gray-200">
                                        <FaRegComment className='text-xl mr-2' />64
                                    </span>

                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none pr-3 py-1">
                                        <FaRegShareSquare className='text-xl mr-2' />500
                                    </span>
                                </div>

                            </div>
                        </div>


                        <div className="p-12 w-full flex flex-col items-start shadow border py-8 md:py-12 px-6 md:px-16 rounded">
                            <a className="inline-flex items-center mt-4">
                                <img alt="blog" src="https://i.ibb.co/34GxQTD/1677149097978-01.jpg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-top" />
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-gray-900">Sanjoy Sarker</span>
                                    <span className="text-gray-400 text-xs tracking-widest mt-0.5">WEB DEVELOPER</span>
                                </span>
                            </a>
                            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">What is MongoDB aggregate and how does it work?</h2>
                            <p className="leading-relaxed mb-8">MongoDB's aggregate is a feature that enables advanced data processing and analysis within the database. It works by applying a sequence of stages to a collection of documents. Each stage performs specific operations like filtering, grouping, sorting, and aggregating data. Aggregate allows for complex calculations, such as calculating averages, sums, or performing text search. It provides a flexible and efficient way to process and transform data directly in MongoDB, simplifying application code and improving performance.</p>
                            <div className="flex items-center flex-wrap pt-4 border-t-2 border-gray-100  w-full justify-between">

                                <div className='flex items-center'>
                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none pr-3 py-1 border-r-2 border-gray-200">
                                        <BiLike className='text-2xl mr-2' />1.2K
                                    </span>
                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none pr-3 py-1 border-r-2 border-gray-200">
                                        <FaRegComment className='text-xl mr-2' />64
                                    </span>

                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none pr-3 py-1">
                                        <FaRegShareSquare className='text-xl mr-2' />500
                                    </span>
                                </div>

                            </div>
                        </div>



                    </div>
                </div>
            </section>

        </div>
    );
};

export default Blogs;