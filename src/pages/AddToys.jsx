import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuthProvider } from '../AuthProvider/AuthProvider';
import Select from 'react-select';
import Swal from 'sweetalert2'
import useTitle from '../hooks/useTitle';



const AddToys = () => {
    const { user } = useAuthProvider()
    const [selectedOption, setSelectedOption] = useState(null);
    useTitle('Add Toys')

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.price = parseInt(data.price);
        data.subcategory = selectedOption
        console.log(data)

        fetch('https://toy-marketplace-heroichavens-server.vercel.app/add-toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center-center',
                        icon: 'success',
                        title: 'Successfully Added Your Toy',
                        showConfirmButton: false,
                        timer: 1500,
                    })
                }
                reset()
            })

    }

    const options = [
        { value: 'Avengers', label: 'Avengers' },
        { value: 'DC', label: 'DC' },
        { value: 'Star Wars', label: 'Star Wars' },
        { value: 'Transformers', label: 'Transformers' },
    ];

    const customStyles = {
        control: (provided) => ({
            ...provided,
            padding: '4px',
        }),
    };

    return (


        <div>

            <div className="headerBanner bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] w-full h-[200px] md:h-[300px]  py-10  flex items-center justify-center flex-col">
                <h2 className="text-2xl md:text-4xl text-white font-bold mb-3">Add Your Toys</h2>
                <p className="text-xl text-white"><Link to='/' className='text-blue-500'>Home</Link>/AddToys</p>
            </div>


            <div className="lg:w-2/3 md:w-1/2 bg-white flex flex-col md:mx-auto w-full md:pt-24 md:pb-12 mt-8 md:mt-0">

                <form onSubmit={handleSubmit(onSubmit)} >

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
                        <div className="relative mb-4 w-full">
                            <label htmlFor="seller" className="leading-7 text-sm text-gray-600">Seller Name</label>
                            <input type="text" id="seller" {...register("seller")} defaultValue={user?.displayName} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4 w-full">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Seller Email</label>
                            <input type="email" id="email" {...register("email")} defaultValue={user?.email} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
                        <div className="relative mb-4 w-full">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Toys Name</label>
                            <input type="text" id="name" {...register("name", { required: true })} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4 w-full">
                            <label htmlFor="photo" className="leading-7 text-sm text-gray-600">Photo URL</label>
                            <input type="photo" id="photo" {...register("photo", { required: true })} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6">
                        <div className="relative mb-4 w-full">
                            <label htmlFor="price" className="leading-7 text-sm text-gray-600">Price</label>
                            <input type="number" id="price" {...register("price", { required: true })} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4 w-full">
                            <label htmlFor="rating" className="leading-7 text-sm text-gray-600">Rating</label>
                            <input type="text" id="rating" {...register("rating", { required: true })} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4 w-full">
                            <label htmlFor="quantity" className="leading-7 text-sm text-gray-600">Quantity</label>
                            <input type="number" id="quantity" {...register("quantity", { required: true })} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>


                    <div className="relative mb-4 w-full">
                        <label htmlFor="quantity" className="leading-7 text-sm text-gray-600">Sub Category</label>

                        <Select styles={customStyles}
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            required
                        />

                    </div>



                    <div className="relative mb-4">
                        <label htmlFor="description" className="leading-7 text-sm text-gray-600">Description</label>
                        <textarea id="description" {...register("description", { required: true })} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-24 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <input type="submit" className="mt-3 w-full text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg" value='Add a Toy' />
                </form>

            </div>


        </div >
    );
};

export default AddToys;