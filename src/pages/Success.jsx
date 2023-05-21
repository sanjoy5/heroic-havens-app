import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

const Success = () => {
    useTitle('Success')
    return (
        <div className='w-full h-screen flex items-center justify-center flex-col'>
            <div className="border px-5 md:px-10 py-20 mx-5">
                <div className="text-center">
                    <img src="https://i.ibb.co/tx00CwW/undraw-welcome-cats-thqn.png" className='max-w-[500px] w-full mx-auto' alt="" />
                </div>
                <h2 className="text-2xl md:text-4xl text-blue-500 mb-10 w-full md:w-3/4 mx-auto text-center">
                    Congratulations! You're now a superhero in our community.
                </h2>
                <div className="text-center">
                    <Link to='/' className=" text-white bg-gray-800 border-0 py-3 px-6 focus:outline-none hover:bg-gray-900 rounded text-lg">Go to Home Page</Link>
                </div>
            </div>

        </div>
    );
};

export default Success;