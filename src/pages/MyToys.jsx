import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthProvider } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import useTitle from '../hooks/useTitle';

const MyToys = () => {
    const { user } = useAuthProvider()
    const [toys, setToys] = useState([])
    const [searchText, setSearchText] = useState('')
    const [showBtn, setShowBtn] = useState(false)
    const [sortOrder, setSortOrder] = useState('asc')
    const [toggleBtn, setToggleBtn] = useState(true)
    useTitle('My Toys')


    useEffect(() => {
        fetch(`https://toy-marketplace-heroichavens-server.vercel.app/mytoys/${user?.email}?sortOrder=${sortOrder}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [user, sortOrder])

    const handleSearch = () => {
        fetch(`https://toy-marketplace-heroichavens-server.vercel.app/mytoySearch/${searchText}?email=${user?.email}&sortOrder=${sortOrder}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data, '###');
                setToys(data)
                setShowBtn(true)
            })
    }

    const showAll = () => {
        fetch(`https://toy-marketplace-heroichavens-server.vercel.app/mytoys/${user?.email}?sortOrder=${sortOrder}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
                setShowBtn(false)
            })
    }

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://toy-marketplace-heroichavens-server.vercel.app/deletetoys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = toys?.filter(toy => toy._id !== _id)
                            setToys(remaining)
                        }
                    })


            }
        })
    }


    return (
        <div>
            <div className="headerBanner bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] w-full h-[200px] md:h-[300px]  py-10  flex items-center justify-center flex-col">
                <h2 className="text-2xl md:text-4xl text-white font-bold mb-3">{user?.displayName}'s Toys</h2>
                <p className="text-xl text-white"><Link to='/' className='text-blue-500'>Home</Link>/MyToys</p>
            </div>

            <div className="flex gap-4 flex-wrap items-center justify-between w-full my-16">

                <div className='w-ful md:w-3/4 flex items-center gap-4'>
                    <div className="w-full max-w-md flex items-center gap-2">
                        <input onChange={(e) => setSearchText(e.target.value)} type="search" name="search" className="w-full bg-white rounded border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        <button onClick={handleSearch} className="text-white bg-blue-500 border-0 py-2 px-4 md:px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Search</button>
                    </div>
                    {showBtn &&
                        <button onClick={showAll} className="text-white bg-blue-500 border-0 py-2 px-4 md:px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">All</button>
                    }
                </div>

                {/* <button onClick={() => setSortOrder('asc')} className="flex items-center text-white bg-blue-500 border-0 py-2 px-4 md:px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">ASC <FaArrowDown className='ml-2' /></button>
                <button onClick={() => setSortOrder('dsc')} className="flex items-center text-white bg-blue-500 border-0 py-2 px-4 md:px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">DSC <FaArrowUp className='ml-2' /></button> */}

                <select onChange={(e) => setSortOrder(e.target.value)} name="filter" className='border-0 bg-gray-100 py-3 px-5 rounded outline-none text-lg text-gray-800 font-medium'>
                    <option value="asc">Asc</option>
                    <option value="dsc">Dsc</option>
                </select>

            </div>


            <div className=" w-full mx-auto pb-16 overflow-auto">
                <table className="table-auto w-full text-left whitespace-no-wrap whitespace-nowrap">
                    <thead>
                        <tr>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Toy Name</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Sub Category</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Quantity</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Rating</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Details</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Update</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Delete</th>
                            <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys?.map((toy, idx) => {
                                const { _id, seller, name, subcategory, price, quantity, rating } = toy;

                                return (

                                    <tr key={_id}>

                                        <td className="border-b-2 border-gray-200 px-4 py-3">{name}</td>
                                        <td className="border-b-2 border-gray-200 px-4 py-3">{subcategory?.value}</td>
                                        <td className="border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">Tk {price}</td>
                                        <td className="border-b-2 border-gray-200 px-4 py-3">{quantity} Pcs</td>
                                        <td className="border-b-2 border-gray-200 px-4 py-3">{rating} stars</td>
                                        <td className="border-b-2 border-gray-200 px-4 py-3">
                                            <Link to={`/toys/${_id}`} className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">View Details

                                            </Link>
                                        </td>
                                        <td className="border-b-2 border-gray-200 px-4 py-3">
                                            <Link to={`/updatetoys/${_id}`} className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">Update

                                            </Link>
                                        </td>
                                        <td className="border-b-2 border-gray-200 px-4 py-3">
                                            <button onClick={() => handleDelete(_id)} className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">Delete
                                            </button>
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

export default MyToys;