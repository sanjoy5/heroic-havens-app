import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs';
import { useAuthProvider } from '../AuthProvider/AuthProvider';

const Login = () => {
    const { loginUserWithEmailPassword } = useAuthProvider()
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUserWithEmailPassword(email, password)
            .then(result => {
                const loggedUser = result.user
                navigate('/')
            })
            .catch(error => {
                setError(error.message)
                console.log(error);
            })
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 items-center">

                <div className="">
                    <img class="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/pPXtpJH/istockphoto-1281150061-612x612-prev-ui-1.png" />
                </div>

                <form onSubmit={handleLogin} class="bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 class="text-gray-900 text-xl mb-1 font-medium title-font">Login Here</h2>
                    <p class="leading-relaxed mb-5 text-gray-600">Unlock Your Superhero Universe: Log In and Power Up!</p>

                    {
                        error && <p className="text-base text-red-500 mb-4 py-3 px-5 bg-slate-100"> <strong>Error: </strong> {error}</p>
                    }
                    <div class="relative mb-4">
                        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div class="relative mb-4">
                        <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
                        <input type="password" id="password" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <input type='submit' class="my-4 text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg" value='Login' />
                    <p class="text-base text-gray-500 mt-3">New to Heroic Havens ? <Link to='/signup' className='text-blue-500'>Sign Up</Link>.</p>

                    <div className="divider">OR</div>

                    <button class=" text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded text-lg flex items-center justify-center gap-3 mt-4"> <BsGoogle className='text-xl' /> Login With Google</button>

                </form>
            </div>
        </div>
    );
};

export default Login;