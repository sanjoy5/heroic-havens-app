import React from 'react';


const Gallary = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-10 md:py-16 mx-auto flex flex-wrap">

                    <div class="flex flex-col">
                        <div class="h-1 bg-gray-200 rounded overflow-hidden">
                            <div class="w-24 h-full bg-blue-500"></div>
                        </div>
                        <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                            <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Super Heros Toy Gallary</h1>
                            <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Witness the ultimate gathering of superhero toys in our image gallery. From iconic action figures to collectible statues, immerse yourself in a world of heroic imagination and limitless adventures.</p>
                        </div>
                    </div>

                    <div class="flex flex-wrap md:-m-2 -m-1">
                        <div class="flex flex-wrap w-full md:w-1/2">
                            <div class="md:p-2 p-1 w-full md:w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://i.ibb.co/1nM1sLR/robin-gf286e225b-640.jpg" />
                            </div>
                            <div class="md:p-2 p-1 w-full md:w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://i.ibb.co/GpbBRDC/iron-man-ge70505e17-1920.jpg" />
                            </div>
                            <div class="md:p-2 p-1 w-full md:w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://i.ibb.co/n1cW2Mh/toy-gaa72249cd-1280.jpg" />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-full md:w-1/2">
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block" src=" https://i.ibb.co/Btt1k5W/joker-gd0cd0d540-640.jpg" />
                            </div>


                            <div class="md:p-2 p-1 w-full md:w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://i.ibb.co/6chb6TR/action-figures-g44282b47d-1920.jpg" />
                            </div>
                            <div class="md:p-2 p-1 w-full md:w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://i.ibb.co/DM1N9qP/halloween-ge937e9efe-1920.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallary;