import React, { useContext, useState } from 'react';
import Shared from '../sharedComponent/Shared';
import { Link, Outlet } from 'react-router-dom';
import { ContextGadgets } from '../root/Root';

const Home = () => {
    const gedgets = useContext(ContextGadgets)

    const [category, setCategory] = useState(null)

    const handleCategory = value => {
        setCategory(value);
    }
    
    return (
        <div className='w-11/12 mx-auto'>
            <div className='bg-[#9538E2] rounded-b-lg h-[550px]'>
                <br />
                <div className='mb-[80px] text-center'>
                    <Shared title={"Upgrade Your Tech Accessorize with Gadget Heaven Accessories"} details={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></Shared>
                    <br />
                    <button className='btn text-lg text-[#9538E2] bg-white  font-bold border-2 border-[#9538E2] rounded-full px-[20px] py-[10px] text-center'>Shop Now</button>
                </div>
                {/*  */}
                <div className="w-8/12 mx-auto absolute top-[320px] left-[220px]">
                    <div className="border-white bg-[#ffffff2a] border-2 rounded-xl p-3 w-full">
                        <div className="newsletterBG rounded-xl text-center space-y-6">
                            <img className='rounded-xl md:h-[400] lg:h-[550px] w-full object-cover' src="/src/assets/banner.jpg" alt="" />
                        </div>
                    </div>
                </div>
                {/*  */}
                <br />
            </div>
          
            <div className='text-center mt-[350px]'>
                <h1 className='text-xl md:text-3xl lg:text-4xl font-bold'>Explore Cutting-Edge Gadgets</h1>
            </div>

            <div className='md:flex space-y-5 gap-6 mt-[50px]'>
                <div className='md:flex flex-col gap-6 p-10 rounded-lg gap-y-5 space-x-5 md:space-x-0 bg-white'>
                    <Link to='/'>All Product</Link>
                    <Link to='/home/laptops' onClick={() => handleCategory("laptops")}>Laptops</Link>
                    <Link to='/home/phones' onClick={() => handleCategory("phones")}> Phones</Link>
                    <Link to='/home/accessories' onClick={() => handleCategory("accessories")}> Accessories</Link>
                    <Link to='/home/smart-watches' onClick={() => handleCategory("smart watch")}> Smart Watches</Link>
                    <Link to='/home/macbook' onClick={() => handleCategory("macbook")}> MacBook</Link>
                    <Link to='/home/iphone' onClick={() => handleCategory("iphone")}> Iphone</Link>
                </div>
                <div>
                    <Outlet context={[category]}></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Home;