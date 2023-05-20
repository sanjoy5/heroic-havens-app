import React from 'react';
import Ratings from './Ratings';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Toys = ({ toys }) => {
    return (

        <section class="text-gray-600 body-font">
            <div class="container px-5 mx-auto flex flex-wrap">
                <div class="flex flex-wrap -m-4">

                    {
                        toys?.map(toy => {
                            const { _id, seller, name, subcategory, price, quantity, photo, description, rating } = toy;
                            return (
                                <>
                                    <div key={_id} class="p-4 lg:w-1/2 md:w-full">
                                        <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                                            <div class="w-full md:w-1/3 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center">
                                                <img src={photo} alt="" />
                                            </div>
                                            <div class="w-full md:w-2/3">
                                                <h2 class="text-sm title-font text-gray-500 tracking-widest">{subcategory?.value}</h2>
                                                <h2 class="text-gray-900 text-lg title-font font-medium mb-1">{name}</h2>
                                                <Ratings value={rating} text={`(${rating} Stars)`} color={'#2563EB'} />
                                                <p class="leading-relaxed text-base mb-1 mt-3">{description && description.slice(0, 70)}...</p>
                                                <p class="leading-relaxed text-base font-semibold mb-1">৳ {price}</p>
                                                {/* <p class="leading-relaxed text-base mb-1">Qty: {quantity} pcs</p>
                                                <p class="leading-relaxed text-base ">Seller: {seller}</p> */}

                                                <Link to={`/toys/${_id}`} class="mt-3 text-blue-500 inline-flex items-center">View Details
                                                    <BsArrowRight className="ml-2 text-lg" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </div>
        </section>


    );
};

export default Toys;