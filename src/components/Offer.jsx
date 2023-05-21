import React from 'react';

const Offer = () => {
    return (
        <div className='mt-10 md:mt-16 mb-16'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="grid grid-cols-2 items-center justify-center border shadow px-5 md:px-8 py-8 offer" data-aos="fade-in" data-aos-duration="2000">
                    <div className="">
                        <p className="text-lg text-gray-700">Limited Offer</p>
                        <h2 className="text-2xl font-semi-bold text-blue-500 mt-1 mb-3">Upto 50% Off</h2>
                        <button className="py-2 px-5 bg-blue-500 text-white text-base font-semibold">Shop Now</button>
                    </div>
                    <div className="">
                        <img src="https://i.ibb.co/Y88dmgh/removal-ai-tmp-64653c9255fae.png" className='w-full' alt="" />
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center justify-center border shadow px-5 md:px-8 py-8 offer" data-aos="fade-in" data-aos-duration="2000">
                    <div className="">
                        <p className="text-lg text-gray-700">Black Friday</p>
                        <h2 className="text-2xl font-semi-bold text-blue-500 mt-1 mb-3">Upto 30% Off</h2>
                        <button className="py-2 px-5 bg-blue-500 text-white text-base font-semibold">Shop Now</button>
                    </div>
                    <div className="">
                        <img src="https://i.ibb.co/xhyRjCs/removal-ai-tmp-64653c9255fae-1.png" className='w-full' alt="" />
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center justify-center border shadow px-5 md:px-8 py-8 offer" data-aos="fade-in" data-aos-duration="2000">
                    <div className="">
                        <p className="text-lg text-gray-700">Big Discount</p>
                        <h2 className="text-2xl font-semi-bold text-blue-500 mt-1 mb-3">Upto 65% Off</h2>
                        <button className="py-2 px-5 bg-blue-500 text-white text-base font-semibold">Shop Now</button>
                    </div>
                    <div className="">
                        <img src="https://i.ibb.co/M5qy2y2/removal-ai-tmp-64653c9255fae-2.png" className='w-full' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;