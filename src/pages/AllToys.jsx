import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import Ratings from '../components/Ratings';
import useTitle from '../hooks/useTitle';

const AllToys = () => {

    const toys = useLoaderData()
    const [allToys, setAllToys] = useState(toys)
    const [searchText, setSearchText] = useState('')
    const [showBtn, setShowBtn] = useState(false)
    useTitle('All Toys')

    const handleSearch = () => {
        fetch(`https://toy-marketplace-heroichavens-server.vercel.app/toySearchByTitle/${searchText}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data, '###');
                setAllToys(data)
                setShowBtn(true)
            })
    }

    const showAll = () => {
        setAllToys(toys)
        setShowBtn(false)
    }


    return (
        <div>
            <div className="headerBanner bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] w-full h-[200px] md:h-[300px]  py-10  flex items-center justify-center flex-col">
                <h2 className="text-2xl md:text-4xl text-white font-bold mb-3">All Toys</h2>
                <p className="text-xl text-white"><Link to='/' className='text-blue-500'>Home</Link>/AllToys</p>
            </div>


            <div className="flex gap-4 items-center justify-center w-full my-16">
                <div className="w-full max-w-md flex items-center gap-2">
                    <input onChange={(e) => setSearchText(e.target.value)} type="search" name="search" className="w-full bg-white rounded border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    <button onClick={handleSearch} className="text-white bg-blue-500 border-0 py-2 px-4 md:px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Search</button>
                </div>
                {showBtn &&
                    <button onClick={showAll} className="text-white bg-blue-500 border-0 py-2 px-4 md:px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">All</button>
                }
            </div>



            {/* <div className=" w-full mx-auto pb-16">

                <section className="text-gray-600 body-font">
                    <div className="container px-5 mx-auto flex flex-wrap">
                        <div className="flex flex-wrap -m-4">

                            {
                                allToys?.map((toy, idx) => {
                                    const { _id, seller, name, subcategory, price, quantity, photo, description, rating } = toy;
                                    return (
                                        <>
                                            <div key={_id} className="p-4 lg:w-1/2 md:w-full">
                                                <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                                                    <div className="w-full md:w-1/3 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center">
                                                        <img src={photo} alt="" />
                                                    </div>
                                                    <div className="w-full md:w-2/3">
                                                        <h2 className="text-sm title-font text-gray-500 tracking-widest">{subcategory?.value}</h2>
                                                        <h2 className="text-gray-900 text-lg title-font font-medium mb-1">{name}</h2>
                                                        <Ratings value={rating} text={`(${rating} Stars)`} color={'#2563EB'} />
                                                        <p className="leading-relaxed text-base mb-1 mt-3">{description && description.slice(0, 70)}...</p>
                                                        <p className="leading-relaxed text-base font-semibold mb-1">৳ {price}</p>
                                                        <p className="leading-relaxed text-base mb-1">Qty: {quantity} pcs</p>
                                                        <p className="leading-relaxed text-base ">Seller: {seller}</p>

                                                        <Link to={`/toys/${_id}`} className="mt-3 text-blue-500 inline-flex items-center">View Details
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
            </div> */}


            <div className=" w-full mx-auto pb-16 overflow-auto">
                <table className="table-auto w-full text-left whitespace-no-wrap whitespace-nowrap">
                    <thead>
                        <tr>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">SN</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Image</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Toy Name</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Sub Category</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Quantity</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Rating</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Seller Name</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Details</th>
                            <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys?.map((toy, idx) => {
                                const { _id, seller, name, subcategory, price, quantity, photo, rating } = toy;

                                return (

                                    <tr key={_id}>

                                        <td className="border-b-2 border-gray-200 px-4 py-3">{idx + 1}</td>
                                        <td className="border-b-2 border-gray-200 px-4 py-3">
                                            <img src={photo} alt={name} className="w-16 h-16 object-contain" />
                                        </td>
                                        <td className="border-b-2 border-gray-200 px-4 py-3">{name}</td>
                                        <td className="border-b-2 border-gray-200 px-4 py-3">{subcategory?.value}</td>
                                        <td className="border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">Tk {price}</td>
                                        <td className="border-b-2 border-gray-200 px-4 py-3">{quantity} Pcs</td>
                                        <td className="border-b-2 border-gray-200 px-4 py-3">{rating} stars</td>
                                        <td className="border-b-2 border-gray-200 px-4 py-3">{seller}</td>
                                        <td className="border-b-2 border-gray-200 px-4 py-3">
                                            <Link to={`/toys/${_id}`} className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">View Details</Link>
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