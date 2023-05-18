import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineBars } from 'react-icons/ai';

const Header = () => {

    const links = <>
        <Link className='text-lg' to='/'>Home</Link>
        <Link className='text-lg' to='/all-toys'>All Toys</Link>
        <Link className='text-lg' to='/my-toys'>My Toys</Link>
        <Link className='text-lg' to='/add-toys'>Add a Toy</Link>
        <Link className='text-lg' to='/blogs'>Blogs</Link>
    </>

    return (
        <div className=' py-2 bg-blue-50'>
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="cursor-pointer lg:hidden">
                            <AiOutlineBars className='text-xl mr-3' />
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 py-4 px-8 shadow bg-base-100 rounded-box w-52 space-y-2">
                            {links}
                        </ul>
                    </div>
                    <Link className="text-xl md:text-3xl text-blue-500 font-bold">HeroicHavens</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-6">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to=''> <img src="https://i.ibb.co/Qdg22Y8/user1.png" className='h-[40px] w-[40px] rounded-full object-cover mr-4 ' alt="" /></Link>
                    <Link className="btn">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;