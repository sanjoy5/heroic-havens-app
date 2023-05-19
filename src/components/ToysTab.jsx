import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Ratings from './Ratings';
import { BsArrowRight } from 'react-icons/bs';
import Toys from './Toys';

const ToysTab = () => {
    const toysData = useLoaderData()
    const [selectedCategory, setSelectedCategory] = useState('Avengers');
    const [toys, setToys] = useState(null)


    useEffect(() => {
        const filterCategoryToys = toysData.filter(toys => toys.subcategory.value === selectedCategory)
        setToys(filterCategoryToys)
    }, [toys])

    return (
        <div className='my-16'>
            <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Shop by Category</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Explore our wide range of products, conveniently categorized for a seamless shopping experience</p>
            </div>

            <Tabs>
                <TabList className="custom-tab-list">
                    <Tab onClick={() => setSelectedCategory('Avengers')} className="custom-tab">Avengers</Tab>
                    <Tab onClick={() => setSelectedCategory('DC')} className="custom-tab">DC</Tab>
                    <Tab onClick={() => setSelectedCategory('Star Wars')} className="custom-tab">Star Wars</Tab>
                </TabList>

                <TabPanel>
                    <Toys toys={toys} />
                </TabPanel>
                <TabPanel>
                    <Toys toys={toys} />
                </TabPanel>
                <TabPanel>
                    <Toys toys={toys} />
                </TabPanel>


            </Tabs>

        </div>
    );
};

export default ToysTab;