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





                <SwiperSlide className='bg-white'>


                    <section className="text-gray-600 body-font">
                        <div className="container mx-auto flex  py-16 md:flex-row flex-col items-center gap-10">
                            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" data-aos="fade-right" data-aos-duration="1000">
                                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">

                                    Assemble Your Own Heroic Team  <br className="hidden lg:inline-block" /> with Avengers Toys
                                </h1>
                                <p className="mb-8 leading-relaxed">Experience the Marvel magic with our unbeatable range of Avengers toys. From action figures to epic playsets, unleash your inner superhero and bring the adventure home. Shop now and join the Avengers!</p>
                                <div className="flex justify-center">
                                    <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Shop Now</button>
                                    <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Explore More</button>
                                </div>
                            </div>
                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" data-aos="fade-left" data-aos-duration="1000">
                                <img className="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/XpPfDwP/mulyadi-je229d-O2-TFE-unsplash.jpg" />
                            </div>
                        </div>
                    </section>

                </SwiperSlide>

                <SwiperSlide className='bg-white'>


                    <section className="text-gray-600 body-font">
                        <div className="container mx-auto flex  py-16 md:flex-row flex-col items-center gap-10">

                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                <img className="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/wc4S3bp/mulyadi-je229d-O2-TFE-unsplash-2.jpg" />
                            </div>

                            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                                    Unleash Your Inner Hero <br className="hidden lg:inline-block" /> with DC Comics Toys

                                </h1>
                                <p className="mb-8 leading-relaxed">Discover the thrilling world of DC with our vast selection of DC toys. From action figures to iconic playsets, unleash your imagination and bring your favorite heroes and villains to life. Shop now and embrace the DC universe!</p>
                                <div className="flex justify-center">
                                    <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Shop Now</button>
                                    <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Explore More</button>
                                </div>
                            </div>

                        </div>
                    </section>

                </SwiperSlide>


                <SwiperSlide className='bg-white'>


                    <section className="text-gray-600 body-font">
                        <div className="container mx-auto flex  py-16 md:flex-row flex-col items-center gap-10">



                            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                                    Journey to a Galaxy Far Far Away <br className="hidden lg:inline-block" />  with Star Wars Toys

                                </h1>
                                <p className="mb-8 leading-relaxed">Embark on an intergalactic adventure with our extensive collection of Star Wars toys. From action figures to starships, ignite your imagination and immerse yourself in the epic saga. Shop now and join the Force!</p>
                                <div className="flex justify-center">
                                    <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Shop Now</button>
                                    <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Explore More</button>
                                </div>
                            </div>

                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                <img className="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/HxqqmWJ/mulyadi-je229d-O2-TFE-unsplash-1.jpg" />
                            </div>

                        </div>
                    </section>

                </SwiperSlide>


                <SwiperSlide className='bg-white'>


                    <section className="text-gray-600 body-font">
                        <div className="container mx-auto flex  py-16 md:flex-row flex-col items-center gap-10">

                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                <img className="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/d6c6g4r/mulyadi-je229d-O2-TFE-unsplash-3.jpg" />
                            </div>

                            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">

                                    Transform Your World with <br className="hidden lg:inline-block" /> Exciting Transformers Toys

                                </h1>
                                <p className="mb-8 leading-relaxed">Gear up for an electrifying experience with our range of Transformer toys. From mighty robots to sleek vehicles, ignite your imagination and unleash the power of transformation. Shop now and embark on epic adventures!</p>
                                <div className="flex justify-center">
                                    <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Shop Now</button>
                                    <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Explore More</button>
                                </div>
                            </div>

                        </div>
                    </section>

                </SwiperSlide>



            </Swiper>

        </>
    );
};

export default Banner;