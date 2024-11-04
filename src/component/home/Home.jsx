import React, { useContext, useState } from 'react';
import Shared from '../sharedComponent/Shared';
import { Link, Outlet } from 'react-router-dom';
import { ContextGadgets} from '../root/Root';

const Home = () => {
    const gedgets = useContext(ContextGadgets)

    const [category, setCategory] = useState()

    const handleCategory = value => {
        setCategory(value);
    }

    return (
        <div className='w-11/12 mx-auto bg-gray-100 p-10'>
            <div className='mb-[80px]'>
                <Shared title={"Upgrade Your Tech Accessorize with Gadget Heaven Accessories"} details={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></Shared>
            </div>
            {/*  */}
            {/* <div className="w-11/12 mx-auto relative">
                <div className="border-white bg-[#ffffff2a] border-2 rounded-xl p-3 absolute w-full top-[-420px] md:top-[-380px] lg:top-[-380px]">
                    <div className="newsletterBG rounded-xl text-center py-[80px] space-y-6">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Subscribe to our Newsletter</h1>
                        <p className="text-[#131313B3] font-semibold">Get the latest updates and news right in your inbox!</p>
                        <div className="flex flex-wrap gap-2 justify-center">
                            <input className="py-[10px] px-10 rounded-xl border-2 block" type="text" placeholder="Enter your email" />
                            <button className="btn border-none rounded-xl buttonBG1 text-black font-bold block">Subscribe</button>
                        </div>
                    </div>
                </div>
                </div> */}
            {/*  */}
            <br />
            <div className='text-center'>
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