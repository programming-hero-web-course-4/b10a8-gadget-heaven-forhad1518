import React, { useState } from 'react';
import Shared from '../sharedComponent/Shared';
import { NavLink, Outlet } from 'react-router-dom';
import banner from "../../assets/banner.jpg";
import { clickLocation } from '../root/Root';

const Home = () => {
    clickLocation()
    return (
        <div className='w-11/12 mx-auto'>
            <div className='bg-[#9538E2] rounded-b-lg h-[550px] relative'>
                <br />
                <div className='mb-[80px] text-center'>
                    <Shared title={"Upgrade Your Tech Accessorize with Gadget Heaven Accessories"} details={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></Shared>
                    <br />
                    <button className='btn text-lg text-[#9538E2] bg-white  font-bold border-2 border-[#9538E2] rounded-full px-[20px] py-[10px] text-center'>Shop Now</button>
                    
                </div>
                {/*  */}
                <div className="w-8/12 mx-auto absolute top-[50%] left-[17%]">
                    <div className="border-white bg-[#ffffff2a] border-2 rounded-xl p-3 w-full">
                        <div className="newsletterBG rounded-xl text-center space-y-6">
                            <img className='rounded-xl md:h-[400] lg:h-[550px] w-full object-cover' src={banner} alt="" />
                        </div>
                    </div>
                </div>
                {/*  */}
                <br />
            </div>

            <div className='text-center mb-5 mt-[80px] lg:mt-[350px] md:mt-[170px]'>
                <h1 className='text-xl md:text-3xl lg:text-4xl font-bold'>Explore Cutting-Edge Gadgets</h1>
            </div>

            <div className='md:flex gap-3'>
                <div className='rounded-lg bg-white p-4 h-[430px] space-y-4'>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'bg-[#9538E2] text-white px-3 py-2 font-bold rounded-full block' : 'bg-[#09080F0D] px-3 py-2 rounded-full block'
                    }>All Product</NavLink>
                    <NavLink to='/home/laptops' className={({ isActive }) => isActive ? 'bg-[#9538E2] text-white px-3 py-2 font-bold rounded-full block' : 'bg-[#09080F0D] px-3 py-2 rounded-full block'
                    } >Laptops</NavLink>
                    <NavLink to='/home/phones' className={({ isActive }) => isActive ? 'bg-[#9538E2] text-white px-3 py-2 font-bold rounded-full block' : 'bg-[#09080F0D] px-3 py-2 rounded-full block'
                    } > Phones</NavLink>
                    <NavLink to='/home/accessories' className={({ isActive }) => isActive ? 'bg-[#9538E2] text-white px-3 py-2 font-bold rounded-full block' : 'bg-[#09080F0D] px-3 py-2 rounded-full block'
                    } > Accessories</NavLink>
                    <NavLink to='/home/smartwatches' className={({ isActive }) => isActive ? 'bg-[#9538E2] text-white px-3 py-2 font-bold rounded-full block' : 'bg-[#09080F0D] px-3 py-2 rounded-full block'
                    } > Smart Watches</NavLink>
                    <NavLink to='/home/macbook' className={({ isActive }) => isActive ? 'bg-[#9538E2] text-white px-3 py-2 font-bold rounded-full block' : 'bg-[#09080F0D] px-3 py-2 rounded-full block'
                    } > MacBook</NavLink>
                    <NavLink to='/home/iphone' className={({ isActive }) => isActive ? 'bg-[#9538E2] text-white px-3 py-2 font-bold rounded-full block' : 'bg-[#09080F0D] px-3 py-2 rounded-full block'
                    } > Iphone</NavLink>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Home;