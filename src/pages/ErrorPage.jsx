import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='errorPage'>
            <div class="text-center">
                <span class="emoji">😿</span>
                <h1 className='mt-7 text-4xl text-[#24292e]'>404 Error: Page Not Found</h1>
                <p className='py-5 text-lg text-[#586069]'>The page you are looking for doesn't exist.</p>
                <p className='text-lg'>Go back to <Link to="/" className='text-blue-500 hover:text-blue-600 '>homepage</Link>.</p>
            </div>
        </div>
    );
};

export default ErrorPage;