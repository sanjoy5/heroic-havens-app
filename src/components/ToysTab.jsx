import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Toys from './Toys';

const ToysTab = () => {
    const toysData = useLoaderData()
    const [selectedCategory, setSelectedCategory] = useState('Avengers');
    const [toys, setToys] = useState(null)


    useEffect(() => {
        const filterCategoryToys = toysData.filter(toys => toys.subcategory.value === selectedCategory)
        setToys(filterCategoryToys)
    }, [selectedCategory, toysData])

    return (
        <div className='mt-16'>
            <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Shop by Category</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Explore our wide range of products, conveniently categorized for a seamless shopping experience</p>
            </div>

            <Tabs>
                <TabList className="custom-tab-list">
                    <Tab onClick={() => setSelectedCategory('Avengers')} className="custom-tab">Avengers</Tab>
                    <Tab onClick={() => setSelectedCategory('DC')} className="custom-tab">DC</Tab>
                    <Tab onClick={() => setSelectedCategory('Star Wars')} className="custom-tab">Star Wars</Tab>
                    <Tab onClick={() => setSelectedCategory('Transformers')} className="custom-tab">Transformers</Tab>
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
                <TabPanel>
                    <Toys toys={toys} />
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ToysTab;