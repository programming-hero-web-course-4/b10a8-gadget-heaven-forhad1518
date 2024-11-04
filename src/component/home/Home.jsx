import React from 'react';
import Shared from '../sharedComponent/Shared';
import { NavLink, Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto bg-gray-100 p-10'>
            <div className='mb-[80px]'>
                <Shared title={"Upgrade Your Tech Accessorize with Gadget Heaven Accessories"} details={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></Shared>
            </div>
            <br />
            <div className='text-center'>
                <h1 className='text-xl md:text-3xl lg:text-4xl font-bold'>Explore Cutting-Edge Gadgets</h1>
            </div>
            <div className='md:flex space-y-5'>
                <div className='md:flex flex-col gap-6 p-10 rounded-lg gap-y-5 space-x-5 md:space-x-0 bg-white'>
                    <NavLink to='/'>All Product</NavLink>
                    <NavLink to='/home/laptops'>Laptops</NavLink>
                    <NavLink to='/home/phones'>Phones</NavLink>
                    <NavLink to='/home/accessories'>Accessories</NavLink>
                    <NavLink to='/home/smart-watches'>Smart Watches</NavLink>
                    <NavLink to='/home/macbook'>MacBook</NavLink>
                    <NavLink to='/home/iphone'>Iphone</NavLink>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Home;