import React, { useContext, useState } from 'react';
import Shared from '../sharedComponent/Shared';
import { useOutletContext, useParams } from 'react-router-dom';
import { ContextGadgets } from '../root/Root';




const Datails = () => {
    const gadgets = useContext(ContextGadgets);
    const { product_id } = useParams();
    const [handleCartBtn, ,handleWishBtn] = useOutletContext();
    const gadget = gadgets.find(gedget => gedget.product_id === product_id);
    const {product_title, price, product_image, availability, description, specifications, rating } = gadget;

    return (
        <div className='bg-[#9538E2] rounded-b-lg h-[380px] mb-[500px] md:mb-[300px] relative'>
            <br />
            <div className='mb-[80px] text-center'>
                <Shared title={"Product Details"} details={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></Shared>
                <br />
            </div>
            {/*  */}
            <div className="w-8/12 mx-auto absolute top-[40%] md:top-[50%] left-[17%]">
                <div className="border-white bg-white border-2 rounded-xl p-3 w-full">
                    <div className="md:flex gap-6 newsletterBG rounded-xl space-y-6">
                        <div>
                            <img className='w-[400px]' src={product_image} alt="" />
                        </div>
                        <div>
                            <div className='space-y-4'>
                                <h1 className='text-2xl font-bold'>{product_title}</h1>
                                <p>Price: {price}K</p>
                                {
                                    availability ? <p className='bg-gray-200 text-center w-[85px] p-1 border-2 text-[#309C08] border-[#309C08] rounded-full'>In stock</p> : <p className='bg-gray-200 text-center w-[100px] p-1 border-2 text-red-600 border-red-600 rounded-full'>Stock out</p>

                                }
                                <p className='text-gray-500'>{description}</p>
                            </div>
                            <div>
                                <h1 className='font-bold'>Specification:</h1>

                                {
                                    specifications.map((specification , index) => <li key={index}>{specification}</li>)
                                }
                            </div>
                            <div>
                                <h1 className='font-bold'>Rating:</h1>
                                <p>⭐ {rating}</p>
                            </div>
                            <div className='space-x-3'>
                                <button onClick={() => handleCartBtn(product_id, price)} className={`${availability? "font-bold text-white bg-[#9538E2] rounded-full py-1 px-3 text-center": "hidden"}`}>Add To Card <i className="fa-solid fa-cart-shopping"></i></button>
                                <button onClick={() => handleWishBtn(product_id)} className="font-bold text-white bg-[#9538E2] rounded-full py-1 px-3 text-center">
                                <i className="fa-solid fa-heart text-xl"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <br />
            <br />
        </div>
    );
};

export default Datails;
