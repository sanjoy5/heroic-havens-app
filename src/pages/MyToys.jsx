import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthProvider } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'

const MyToys = () => {
    const { user, loading } = useAuthProvider()
    const [toys, setToys] = useState([])
    const [searchText, setSearchText] = useState('')
    const [showBtn, setShowBtn] = useState(false)


    useEffect(() => {
        fetch(`http://127.0.0.1:5000/mytoys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [user])

    const handleSearch = () => {
        fetch(`http://127.0.0.1:5000/toySearchByTitle/${searchText}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data, '###');
                setToys(data)
                setShowBtn(true)
            })
    }

    const showAll = () => {
        fetch(`http://127.0.0.1:5000/mytoys/${user?.email}`)
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

                fetch(`http://127.0.0.1:5000/deletetoys/${_id}`, {
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


            {

                <>
                    <div className="flex gap-4 items-center justify-center w-full my-16">
                        <div className="w-full max-w-md flex items-center gap-2">
                            <input onChange={(e) => setSearchText(e.target.value)} type="search" name="search" class="w-full bg-white rounded border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            <button onClick={handleSearch} class="text-white bg-blue-500 border-0 py-2 px-4 md:px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Search</button>
                        </div>
                        {showBtn &&
                            <button onClick={showAll} class="text-white bg-blue-500 border-0 py-2 px-4 md:px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">All</button>
                        }
                    </div>


                    <div class=" w-full mx-auto mb-16 overflow-auto">
                        <table class="table-auto w-full text-left whitespace-no-wrap whitespace-nowrap">
                            <thead>
                                <tr>
                                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Toy Name</th>
                                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Sub Category</th>
                                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
                                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Quantity</th>
                                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Rating</th>
                                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Details</th>
                                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Update</th>
                                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Delete</th>
                                    <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    toys?.map((toy, idx) => {
                                        const { _id, seller, name, subcategory, price, quantity, rating } = toy;

                                        return (

                                            <tr key={_id}>

                                                <td class="border-b-2 border-gray-200 px-4 py-3">{name}</td>
                                                <td class="border-b-2 border-gray-200 px-4 py-3">{subcategory?.value}</td>
                                                <td class="border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">Tk {price}</td>
                                                <td class="border-b-2 border-gray-200 px-4 py-3">{quantity} Pcs</td>
                                                <td class="border-b-2 border-gray-200 px-4 py-3">{rating} stars</td>
                                                <td class="border-b-2 border-gray-200 px-4 py-3">
                                                    <Link to={`/toys/${_id}`} class="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">View Details

                                                    </Link>
                                                </td>
                                                <td class="border-b-2 border-gray-200 px-4 py-3">
                                                    <Link to={`/updatetoys/${_id}`} class="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">Update

                                                    </Link>
                                                </td>
                                                <td class="border-b-2 border-gray-200 px-4 py-3">
                                                    <button onClick={() => handleDelete(_id)} class="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">Delete
                                                    </button>
                                                </td>
                                            </tr>

                                        )
                                    })
                                }


                            </tbody>
                        </table>


                    </div>
                </>


            }

        </div>
    );
};

export default MyToys;