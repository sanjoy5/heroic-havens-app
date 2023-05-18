import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';

const Main = () => {
    const navigation = useNavigation()
    return (
        <>
            <Header></Header>
            <div>{navigation.state === 'loading' && <Loading />}</div>
            <main className='max-w-7xl mx-auto px-2'>
                <Outlet></Outlet>
            </main>
        </>
    );
};

export default Main;