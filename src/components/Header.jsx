import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineBars } from 'react-icons/ai';
import { useAuthProvider } from '../AuthProvider/AuthProvider';
import ActiveLink from './ActiveLink';

const Header = () => {

    const { user, logOut, loading } = useAuthProvider()

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message);
            })

    }

    const links = <>
        <ActiveLink to='/'>Home</ActiveLink>
        <ActiveLink to='/all-toys'>All Toys</ActiveLink>
        {
            user && <>
                <ActiveLink to='/my-toys'>My Toys</ActiveLink>
                <ActiveLink to='/add-toys'>Add a Toy</ActiveLink>
            </>
        }

        <ActiveLink to='/blogs'>Blogs</ActiveLink>
    </>

    return (
        <div className=' py-2 bg-slate-50'>
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="cursor-pointer lg:hidden">
                            <AiOutlineBars className='text-2xl mr-3' />
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 py-4 px-8 shadow bg-base-100 rounded-box w-52 space-y-2">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="text-xl md:text-3xl text-blue-500 font-bold flex items-center gap-2"> <img src="https://i.ibb.co/6PqQRfj/shield.png" className='h-10 w-10 md:h-11 md:w-11' alt="" /> <span className='hidden md:block'>HeroicHavens</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-6 text-lg">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ?
                            <>
                                <Link to='/profie'>
                                    <div className="flex items-center">
                                        <div className="tooltip tooltip-bottom z-10" data-tip={`Welcome, ${user?.displayName}`}>
                                            <img src={user?.photoURL} className='w-10 h-10 md:h-[45px] md:w-[45px] rounded-full object-cover mr-2 ' alt="" />
                                        </div>
                                        <div className="hidden md:block">
                                            <p className="text-sm text-gray-600 leading-4">Welcome</p>
                                            <p className="text-lg text-gray-900 leading-5">{user?.displayName}</p>
                                        </div>
                                    </div>
                                </Link>
                                <button onClick={handleLogOut} className=" md:ml-5 inline-flex text-white bg-blue-500 border-0 py-2 px-4 md:px-6 focus:outline-none hover:bg-blue-600 rounded md:text-lg">Logout</button>
                            </>
                            : <>
                                <Link to='/login' className="inline-flex text-white bg-blue-500 border-0 py-2 px-4 md:px-6 focus:outline-none hover:bg-blue-600 rounded md:text-lg">Login</Link>
                                <Link to='/signup' className="hidden md:inline-flex ml-4  text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Signup</Link>
                            </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;