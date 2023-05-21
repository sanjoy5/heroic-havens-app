import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import Ratings from '../components/Ratings';
import useTitle from '../hooks/useTitle';

const ToyDetails = () => {

    const toyDetails = useLoaderData()
    const { _id, seller, name, subcategory, price, quantity, photo, rating, email, description } = toyDetails;
    useTitle(`${name} Details`)

    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 pt-24 pb-16 mx-auto">
                    <div className="w-full mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-[550px] sm:h-96 h-72 object-contain rounded border" src={photo} />
                        <div className="lg:w-1/2 w-full lg:pl-10  mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{subcategory?.value}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{name}</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <Ratings value={rating} text={`(${rating} Stars)`} color={'#2563EB'} />
                                </span>

                            </div>
                            <p className="title-font font-medium text-2xl text-gray-900 mb-3">৳ {price}</p>
                            <p className="leading-relaxed"><strong>Description: </strong> {description && description}</p>



                            <div className=" mt-2 pb-5 border-b-2 border-gray-100 mb-5">
                                <p className="text-gray-500 mb-4 text-lg font-medium">Quantity : {quantity} pcs</p>
                                <button className=" text-white bg-blue-500 border-0 py-3 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Add to Cart</button>


                            </div>

                            <p className="leading-relaxed">Seller: {seller}</p>
                            <p className="leading-relaxed">Seller Email: {email}</p>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ToyDetails;