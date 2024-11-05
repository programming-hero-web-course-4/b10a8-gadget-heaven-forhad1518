import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ gedget }) => {
    const { product_image, product_title, price, product_id } = gedget;
    return (
        <div className='space-y-6 bg-white p-5 rounded-lg flex flex-col justify-between'>
            <div className=''>
                <img className='h-[200px] w-full object-cover rounded-lg bg-gray-400' src={product_image} alt="" />
            </div>
            <div className='space-y-6'>
                <h1 className='text-2xl font-bold'>{product_title}</h1>
                <p className='text-xl text-[#09080F99]'>Price: {price}K</p>
            </div>
            <div>
                <Link to={`/product/details/${product_id}`} className='text-lg text-[#9538E2] font-bold border-2 border-[#9538E2] rounded-full px-[20px] py-[10px] w-[120px] text-center'>Details</Link>
            </div>
        </div>
    );
};

export default Card;

