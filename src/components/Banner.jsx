import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay, Navigation } from "swiper";

const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[EffectFade, Autoplay, Navigation]}
                className="mySwiper"
            >


                <SwiperSlide className='bg-white relative'>

                    <div className="banner1  flex items-center justify-center">
                        <div className="w-11/12 md:w-1/2 text-center">
                            <p className="text-xl text-white font-bold">Big Discount</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Assemble Your Own Heroic Team with Avengers Toys</h2>
                            <button className="py-3 px-6 bg-blue-500 text-white text-lg font-medium mt-6">Shop Now</button>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide className='bg-white relative'>

                    <div className="banner2  flex items-center justify-center">
                        <div className="w-11/12 md:w-1/2 text-center">
                            <p className="text-xl text-white font-bold">Top Seller</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Unleash Your Inner Hero with DC Comics Toys</h2>
                            <button className="py-3 px-6 bg-blue-500 text-white text-lg font-medium mt-6">Shop Now</button>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide className='bg-white relative'>

                    <div className="banner3  flex items-center justify-center">
                        <div className="w-11/12 md:w-1/2 text-center">
                            <p className="text-xl text-white font-bold">Best Porducts</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Journey to a Galaxy Far, Far Away with Star Wars Toys</h2>
                            <button className="py-3 px-6 bg-blue-500 text-white text-lg font-medium mt-6">Shop Now</button>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide className='bg-white relative'>

                    <div className="banner4  flex items-center justify-center">
                        <div className="w-11/12 md:w-1/2 text-center">
                            <p className="text-xl text-white font-bold">Superb Collections</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Transform Your World with Exciting Transformers Toys</h2>
                            <button className="py-3 px-6 bg-blue-500 text-white text-lg font-medium mt-6">Shop Now</button>
                        </div>
                    </div>

                </SwiperSlide>


            </Swiper>

        </>
    );
};

export default Banner;