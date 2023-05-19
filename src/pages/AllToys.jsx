import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const AllToys = () => {

    const toys = useLoaderData()
    const [allToys, setAllToys] = useState(toys)
    const [searchText, setSearchText] = useState('')


    const handleSearch = () => {
        fetch(`http://127.0.0.1:5000/toySearchByTitle/${searchText}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data, '###');
                setAllToys(data)
            })
    }

    return (
        <div>
            <div className="headerBanner bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] w-full h-[200px] md:h-[300px]  py-10  flex items-center justify-center flex-col">
                <h2 className="text-2xl md:text-4xl text-white font-bold mb-3">All Toys</h2>
                <p className="text-xl text-white"><Link to='/' className='text-blue-500'>Home</Link>/AllToys</p>
            </div>


            <div className="flex gap-2 items-center justify-center w-full max-w-md mx-auto my-16">
                <input onChange={(e) => setSearchText(e.target.value)} type="search" name="search" class="w-full bg-white rounded border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                <button onClick={handleSearch} class="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Search</button>
            </div>



            <div class=" w-full mx-auto overflow-auto mb-16">
                <table class="table-auto w-full text-left whitespace-no-wrap whitespace-nowrap">
                    <thead>
                        <tr>
                            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">SN</th>
                            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Seller</th>
                            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Toy Name</th>
                            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Sub Category</th>
                            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
                            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Quantity</th>
                            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Details</th>
                            <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys?.map((toy, idx) => {
                                const { _id, seller, name, subcategory, price, quantity } = toy;

                                return (

                                    <tr key={_id}>
                                        <td class="border-b-2 border-gray-200 px-4 py-3">{idx + 1}</td>
                                        <td class="border-b-2 border-gray-200 px-4 py-3">{seller}</td>
                                        <td class="border-b-2 border-gray-200 px-4 py-3">{name}</td>
                                        <td class="border-b-2 border-gray-200 px-4 py-3">{subcategory.value}</td>
                                        <td class="border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">Tk {price}</td>
                                        <td class="border-b-2 border-gray-200 px-4 py-3">{quantity} Pcs</td>
                                        <td class="border-b-2 border-gray-200 px-4 py-3">
                                            <Link to={`/toys/${_id}`} class="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">View Details
                                                <BsArrowRight className="ml-2 text-lg" />
                                            </Link>
                                        </td>
                                    </tr>

                                )
                            })
                        }


                    </tbody>
                </table>
            </div>




        </div>
    );
};

export default AllToys;