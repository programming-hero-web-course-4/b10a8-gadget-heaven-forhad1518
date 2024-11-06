import React, { useState } from 'react';
import Shared from '../sharedComponent/Shared';
import { Link, useOutletContext } from 'react-router-dom';
import CartProduct from '../Cart/CartProduct';
import WishList from '../WishList/WishList';


const Dashboard = () => {
    const [, cartId, , wishId, balance, handleDeletItem, handleDeleteWish] = useOutletContext()
    // console.log(cartId)

    // set toggle
    const [toggle, setToggle] = useState(true)

    // Set toggle handle
    const toggleBtn = (value) => {
        if (value === true) {
            setToggle(true)
        } else {
            setToggle(false)
        }
    }
    return (
        <div>
            {/* First Container */}
            <div className='bg-[#9538E2]'>
                <br />
                <div className='text-center'>
                    <Shared title={"Dashboard"} details={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></Shared>
                    <br />
                </div>
                <div>
                    <div className="text-center space-x-6">
                        <button onClick={() => toggleBtn(true)} className={`${toggle ? "bg-white text-[#9538E2] border-2 px-6 py-2 rounded-lg font-bold" : "px-6 py-2 rounded-lg border-2 border-white text-white"}`}>Cart</button>
                        <button onClick={() => toggleBtn(false)} className={`${toggle ? "px-6 py-2 rounded-lg border-2 border-white text-white" : "bg-white text-[#9538E2] border-2 px-6 py-2 rounded-lg font-bold"}`}>Wish list</button>
                    </div>
                </div>
                <br />
            </div>
            <br />
            {/* Second Container */}
            <div className='w-11/12 mx-auto flex gap-4 justify-between items-center'>
                <div>
                    <h1 className='text-xl font-bold'>Cart</h1>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='text-xl font-bold'>Total cost: {balance}K</div>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link className='border-[#9538E2] text-[#9538E2] border px-6 py-2 rounded-full'>Sort by Price</Link>
                        <Link className='bg-[#9538E2] text-white border-2 px-6 py-2 rounded-full'>Purchase</Link>
                    </div>
                </div>
            </div>
            {/* Third Container */}
            <br />
            <div className='w-11/12 mx-auto space-y-4'>
                {
                    toggle? cartId.map((cart , index) => <CartProduct index={index} handleDeletItem={handleDeletItem} key={cart.product_id} cart={cart}></CartProduct>) : wishId.map((wishProduct, index) => <WishList index={index} handleDeleteWish={handleDeleteWish} key={wishProduct.product_id} wishProduct={wishProduct}></WishList>)
                }
            </div>
        </div>
    );
};

export default Dashboard;