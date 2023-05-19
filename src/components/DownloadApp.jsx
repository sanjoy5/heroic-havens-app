import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
const DownloadApp = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-10 md:py-16 mx-auto flex items-center md:flex-row flex-col">
                    <div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                        <h2 class="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">Mobile App Acces</h2>
                        <h1 class="md:text-3xl text-2xl font-medium title-font text-gray-900">Download Our Mobile Application</h1>
                    </div>
                    <div class="flex flex-col md:flex-row md:ml-auto md:mr-0 mx-auto items-center gap-4">
                        <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                            <FaGooglePlay className='text-2xl' />
                            <span class="ml-4 flex items-start flex-col leading-none">
                                <span class="text-xs text-gray-600 mb-1">GET IT ON</span>
                                <span class="title-font font-medium">Google Play</span>
                            </span>
                        </button>
                        <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg  items-center hover:bg-gray-200 focus:outline-none">
                            <FaApple className='text-3xl' />
                            <span class="ml-4 flex items-start flex-col leading-none">
                                <span class="text-xs text-gray-600 mb-1">Download on the</span>
                                <span class="title-font font-medium">App Store</span>
                            </span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DownloadApp;