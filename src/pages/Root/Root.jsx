import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <main className='max-w-6xl mx-auto'><Outlet></Outlet></main>
            <Footer></Footer>
        </div>
    );
};

export default Root;