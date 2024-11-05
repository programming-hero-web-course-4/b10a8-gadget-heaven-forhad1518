import React from 'react';

const WishList = ({ wishProduct, handleDeleteWish, index }) => {
    const { product_title, product_image, description, price } = wishProduct;
    return (
        <div className='bg-white rounded-xl p-4'>
            <div className="flex justify-between">
                <div className="flex gap-4 items-center">
                    <div>
                        <img className="h-[120px] rounded-xl object-cover" src={product_image} alt="" />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-xl font-bold">{product_title}</h3>
                        <p className="text-gray-500">{description}</p>
                        <p>Price: {price}K</p>
                    </div>
                </div>
                <div>
                    <button onClick={() => handleDeleteWish(index)}><i className="fa-regular fa-circle-xmark text-red-600 text-2xl"></i></button>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default WishList;