import React, { useState } from 'react';
import Shared from '../sharedComponent/Shared';
import { Link, useOutletContext } from 'react-router-dom';
import CartProduct from '../Cart/CartProduct';
import WishList from '../WishList/WishList';
import modalImg from '../../assets/Group.png'



const Dashboard = () => {
    const [, cartId, , wishId, balance, handleDeletItem, handleDeleteWish, handleSortPriceBtn, handleWishAddCart, handlePurchase] = useOutletContext()
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
                    {/* Modal */}
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box flex flex-col items-center gap-4">
                            <img src={modalImg} alt="" />
                            <h3 className="font-bold text-xl">Payment Successfully</h3>
                            <p className="py-4 text-center text-gray-500">
                                <p>Thanks for purchasing.</p>
                                <p>Total: {balance}K</p>
                            </p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <Link to='/' className="btn">close</Link>
                                </form>
                            </div>
                        </div>
                    </dialog>
                    {/* Modal end */}
                </div>
                <br />
            </div>
            <br />
            {/* Second Container */}
            <div className={`${toggle ? 'w-11/12 mx-auto flex gap-4 justify-between items-center' : 'hidden'}`}>
                <div>
                    <h1 className='text-xl font-bold'>Cart</h1>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='text-xl font-bold'>Total cost: {balance}K</div>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link onClick={handleSortPriceBtn} className='border-[#9538E2] text-[#9538E2] border px-6 py-2 rounded-full'>Sort by Price</Link>
                        <Link onClick={handlePurchase} className='bg-[#9538E2] text-white border-2 px-6 py-2 rounded-full'>Purchase</Link>
                    </div>
                </div>
            </div>
            <div className={`${toggle ? 'hidden' : 'w-11/12 mx-auto text-right'}`}>
                <h1 className='text-xl font-bold'>Wish List</h1>
            </div>
            {/* Third Container */}
            <br />
            <div className='w-11/12 mx-auto space-y-4'>
                {
                    toggle ? cartId?.map((cart, index) => <CartProduct index={index} handleDeletItem={handleDeletItem} key={cart.product_id} cart={cart}></CartProduct>) : wishId.map((wishProduct, index) => <WishList index={index} handleDeleteWish={handleDeleteWish} key={wishProduct.product_id} handleWishAddCart={handleWishAddCart} wishProduct={wishProduct}></WishList>)
                }
            </div>
        </div>
    );
};

export default Dashboard;