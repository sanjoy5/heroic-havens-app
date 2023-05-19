import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import Ratings from '../components/Ratings';

const ToyDetails = () => {

    const toyDetails = useLoaderData()
    const { _id, seller, name, subcategory, price, quantity, photo, rating, email, description } = toyDetails;

    return (
        <div>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="w-full mx-auto flex flex-wrap">
                        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded border" src={photo} />
                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 class="text-sm title-font text-gray-500 tracking-widest">{subcategory?.value}</h2>
                            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{name}</h1>
                            <div class="flex mb-4">
                                <span class="flex items-center">
                                    <Ratings value={rating} text={`(${rating} Stars)`} color={'#2563EB'} />
                                </span>

                            </div>
                            <p class="title-font font-medium text-2xl text-gray-900 mb-3">৳ {price}</p>
                            <p class="leading-relaxed"><strong>Description: </strong> {description && description}</p>



                            <div class=" mt-2 pb-5 border-b-2 border-gray-100 mb-5">
                                <p class="text-gray-500 mb-4 text-lg font-medium">Quantity : {quantity} pcs</p>
                                <button class=" text-white bg-blue-500 border-0 py-3 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Add to Cart</button>


                            </div>

                            <p class="leading-relaxed">Seller: {seller}</p>
                            <p class="leading-relaxed">Seller Email: {email}</p>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ToyDetails;