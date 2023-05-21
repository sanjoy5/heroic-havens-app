import React, { useState } from 'react';
import { BsGoogle } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthProvider } from '../AuthProvider/AuthProvider';
import useTitle from '../hooks/useTitle';

const Signup = () => {

    const { signupUserWIthEmailPassword, updateUser, signInWithGoogle } = useAuthProvider()
    const [error, setError] = useState('')
    const navigate = useNavigate()
    useTitle('Signup')
    let location = useLocation()

    let from = location.state?.from?.pathname || '/'

    const handleSignup = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);

        // validation 
        if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
            setError('Please add minimum 6 letter password, with at least a special symbol, a upper and lower case letters and a number')
            return
        }

        // Handle Register Using Email Password from AuthProvider 
        signupUserWIthEmailPassword(email, password)
            .then(result => {
                const createdUser = result.user
                setError('')
                updateUser(createdUser, name, photo)
                    .then(() => {
                        console.log('user Updated');
                    })
                    .catch(error => {
                        setError(error.message)
                    })
                navigate('/success')
            })
            .catch(error => {
                setError(error.message)
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

                <div className=" bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <form onSubmit={handleSignup}>
                        <h2 className="text-gray-900 text-xl mb-1 font-medium title-font">Sign Up Here</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">Join the Superhero League: Sign Up and Unleash Your Powers!</p>

                        {
                            error && <p className="text-base text-red-500 mb-4 py-3 px-5 bg-slate-100"> <strong>Error: </strong> {error}</p>
                        }


                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="photo" className="leading-7 text-sm text-gray-600">Photo URL</label>
                            <input type="text" id="photo" name="photo" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                            <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                        </div>
                        <input type='submit' className="w-full text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg my-3" value='Sign Up' />
                        <p className="text-base text-gray-500 mt-3">Already Have an Account ? <Link to='/login' className='text-blue-500'>Login</Link>.</p>


                    </form>
                    <div className="divider">OR</div>
                    <button onClick={handleSignupWithGoogle} className=" text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded text-lg flex items-center justify-center gap-3 mt-4"> <BsGoogle className='text-xl' /> Sign Up With Google</button>
                </div>

                <div className="">
                    <img className="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/P5QtCg0/6b1b22573f9f3d4bba11a9fa5cb45652.png" />
                </div>

            </div>
        </div>
    );
};

export default Signup;