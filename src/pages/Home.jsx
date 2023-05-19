import React from 'react';
import Banner from '../components/Banner';
import Offer from '../components/Offer';
import Gallary from '../components/Gallary';
import ToysTab from '../components/ToysTab';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offer></Offer>
            <Gallary></Gallary>
            <ToysTab></ToysTab>
        </div>
    );
};

export default Home;