import React from 'react';

const CallToAction = () => {
    return (
        <div className='calltoaction my-10 md:my-16 h-[400px] w-full relative'>
            <img src="https://i.ibb.co/LPjXZN7/ab6e9d98569b37afca611ed6ba295d23.jpg" alt="" className=" object-cover object-top h-full w-full rounded-lg" />

            <div className="absolute w-full h-full top-0 z-10">
                <div className="py-5 md:py-20 px-3 w-full h-full md:w-1/2 text-center space-y-3 flex items-center justify-center flex-col" data-aos="fade-right" data-aos-duration="2000">
                    <p className="text-xl md:text-2xl text-semibold text-white uppercase">Unlock</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-white uppercase">20% Off</h2>
                    <p className="text-xl md:text-2xl text-semibold text-white uppercase">Your Order</p>

                    <div className="flex w-full flex-col mx-auto px-3 gap-3 md:w-2/3">
                        <div className="w-full mt-2">
                            <input type="email" id="email" name="email" className=" text-center w-full bg-white rounded border border-gray-300 focus:border-blue-500  text-lg outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Email' />
                        </div>
                        <button className="text-white w-full bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Continue</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CallToAction;