import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs';
import { useAuthProvider } from '../AuthProvider/AuthProvider';
import useTitle from '../hooks/useTitle';

const Login = () => {
    const { loginUserWithEmailPassword, signInWithGoogle } = useAuthProvider()
    const [error, setError] = useState('')
    const navigate = useNavigate()
    useTitle('Login')
    let location = useLocation()

    let from = location.state?.from?.pathname || '/'

    // Handle SignUp Using Email password
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        loginUserWithEmailPassword(email, password)
            .then(result => {
                const loggedUser = result.user
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message)
                console.log(error);
            })
    }

    // Handle SignUp Using Google Loging
    const handleSignupWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                setError("")
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 items-center">

                <div className="">
                    <img className="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/pPXtpJH/istockphoto-1281150061-612x612-prev-ui-1.png" />
                </div>

                <div className="bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <form onSubmit={handleLogin} >
                        <h2 className="text-gray-900 text-xl mb-1 font-medium title-font">Login Here</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">Unlock Your Superhero Universe: Log In and Power Up!</p>

                        {
                            error && <p className="text-base text-red-500 mb-4 py-3 px-5 bg-slate-100"> <strong>Error: </strong> {error}</p>
                        }
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                            <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                        </div>
                        <input type='submit' className="w-full my-4 text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg" value='Login' />
                        <p className="text-base text-gray-500 mt-3">New to Heroic Havens ? <Link to='/signup' className='text-blue-500'>Sign Up</Link>.</p>

                    </form>
                    <div className="divider">OR</div>
                    <button onClick={handleSignupWithGoogle} className=" text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded text-lg flex items-center justify-center gap-3 mt-4"> <BsGoogle className='text-xl' /> Login With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;