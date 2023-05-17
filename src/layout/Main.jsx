import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Main = () => {
    return (
        <>
            <Header></Header>
            <main className='max-w-7xl mx-auto px-2'>
                <Outlet></Outlet>
            </main>
        </>
    );
};

export default Main;