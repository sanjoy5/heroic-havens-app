import React from 'react';

const Gallary = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-16 mx-auto flex flex-wrap">
                    <div class="flex w-full mb-20 flex-wrap">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Explore Our Super Heros Toy Gallary</h1>
                        <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Witness the ultimate gathering of superhero toys in our image gallery. From iconic action figures to collectible statues, immerse yourself in a world of heroic imagination and limitless adventures.</p>
                    </div>
                    <div class="flex flex-wrap md:-m-2 -m-1">
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://i.ibb.co/1nM1sLR/robin-gf286e225b-640.jpg" />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://i.ibb.co/Btt1k5W/joker-gd0cd0d540-640.jpg" />
                            </div>
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://i.ibb.co/n1cW2Mh/toy-gaa72249cd-1280.jpg" />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://i.ibb.co/mvttR6m/storm-troopers-g32ec9beb0-1920.jpg" />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://i.ibb.co/tsqqD7W/batman-g85c50ac27-640.jpg" />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://i.ibb.co/TM3dthM/superheroes-g7294e190f-640.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallary;