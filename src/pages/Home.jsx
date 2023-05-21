import React from 'react';
import Banner from '../components/Banner';
import Offer from '../components/Offer';
import Gallary from '../components/Gallary';
import ToysTab from '../components/ToysTab';
import DownloadApp from '../components/DownloadApp';
import CallToAction from '../components/CallToAction';
import useTitle from '../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Offer></Offer>
            <Gallary></Gallary>
            <ToysTab></ToysTab>
            <CallToAction></CallToAction>
            <DownloadApp></DownloadApp>
        </div>
    );
};

export default Home;